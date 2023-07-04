global using Microsoft.AspNetCore.Mvc;
using Alumni.Models;

[ApiController]
[Route("api/auth")]
public class AuthController : ControllerBase
{
    private readonly DataContext _context;

    public AuthController(DataContext context)
    {
        _context = context;
    }

    // TODO
    [HttpPost("login")]
    public IActionResult Login([FromBody] LoginDto user)
    {
        var foundUser = _context.Users.FirstOrDefault(u => u.Login == user.Login && u.Password == user.Password);
        if (foundUser is not null)
        {
            // TODO: Generate jwt token and return
            return Ok();
        }

        return Unauthorized();
    }

    [HttpPost("register")]
    public IActionResult Register([FromBody] RegisterDto registerDto)
    {
        var user = new User { Login = registerDto.Login, Password = registerDto.Password };

        _context.Users.Add(user);
        _context.SaveChanges();

        return Ok(user);
    }
}

public class RegisterDto
{
    public required string Login { get; set; }
    public required string Password { get; set; }
}

public class LoginDto
{
    public required string Login { get; set; }
    public required string Password { get; set; }
}
