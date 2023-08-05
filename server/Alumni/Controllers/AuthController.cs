global using Microsoft.AspNetCore.Mvc;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using Alumni.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.IdentityModel.Tokens;

[ApiController]
[Route("api/auth")]
public class AuthController : ControllerBase
{
    private readonly DataContext _context;
    private int CurrentUserId =>
        HttpContext.User.Identity is not ClaimsIdentity identity
            ? throw new Exception("Unauthorized")
            : int.Parse(
                HttpContext?.User?.Claims?.Where(x => x.Type == "Id").Select(x => x.Value).First()
                    ?? throw new Exception("Unauthorized")
            );

    public AuthController(DataContext context)
    {
        _context = context;
    }

    [HttpPost("login")]
    public IActionResult Login([FromBody] LoginDto user)
    {
        var foundUser = _context.Users.FirstOrDefault(
            u => u.Login == user.Login && u.Password == user.Password
        );
        if (foundUser is not null)
        {
            if (foundUser.Password == user.Password)
            {
                var token = GenerateJwt(user.Login, foundUser.Id.ToString());
                return Ok(new {token = token});
            }
        }

        return Unauthorized();
    }

    private static string GenerateJwt(string login, string id)
    {
        var tokenDescriptor = new SecurityTokenDescriptor
        {
            Subject = new ClaimsIdentity(
                new[] { new Claim("Id", id), new Claim(JwtRegisteredClaimNames.Sub, login) }
            ),
            Expires = DateTime.UtcNow.AddMinutes(5),
            Issuer = "issuer",
            Audience = "audience",
            SigningCredentials = new SigningCredentials(
                new SymmetricSecurityKey(
                    Encoding.UTF8.GetBytes(
                        "some_development_token_that_should_not_be_used_in_production"
                    )
                ),
                SecurityAlgorithms.HmacSha512Signature
            )
        };

        var tokenHandler = new JwtSecurityTokenHandler();
        return tokenHandler.WriteToken(tokenHandler.CreateToken(tokenDescriptor));
    }

    [HttpPost("signup")]
    public IActionResult Register([FromBody] RegisterDto registerDto)
    {
        var user = new User
        {
            Name = registerDto.Name,
            Login = registerDto.Email,
            Password = registerDto.Password
        };

        _context.Users.Add(user);
        _context.SaveChanges();

        return Ok(
            new
            {
                Name = registerDto.Name,
                Login = registerDto.Email,
                Token = GenerateJwt(registerDto.Email, user.Id.ToString())
            }
        );
    }

    [Authorize]
    [HttpPost("register/education-info")]
    public IActionResult EducationInfo([FromBody] EducationCreationDto dto)
    {
        var university = _context.Universities.FirstOrDefault(u => u.Name == dto.UniversityName);
        if (university is null)
        {
            university = new University(dto.UniversityName);
            _context.Universities.Add(university);
            _context.SaveChanges();
        }

        Console.WriteLine(CurrentUserId);

        var data = new EducationInfo { UniversityId = university.Id, UserId = CurrentUserId };

        _context.EducationInfos.Add(data);
        _context.SaveChanges();

        return Ok(data);
    }
}

public class EducationInfo : BaseEntity
{
    public int UserId { get; set; }
    public virtual User? User { get; set; }

    public int UniversityId { get; set; }
    public virtual University? University { get; set; }
}

public class EducationCreationDto
{
    public required string UniversityName { get; set; }
    public required string Degree { get; set; }
    public required DateTime GraduationDate { get; set; }
}

public class University : BaseEntity
{
    public string Name { get; set; }

    public University(string name)
    {
        Name = name;
    }
}

public class RegisterDto
{
    public required string Email { get; set; }
    public required string Name { get; set; }
    public required string Password { get; set; }
}

public class LoginDto
{
    public required string Login { get; set; }
    public required string Password { get; set; }
}
