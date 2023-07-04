global using Microsoft.AspNetCore.Mvc;
using Alumni.Models;

[ApiController]
[Route("api/auth")]
public class AuthController : ControllerBase
{
    private readonly DataContext _centext;

    // TODO
    [HttpPost("login")]
    public IActionResult Login([FromBody] LoginDto user)
    {
        if (user.Login == "admin@admin.com" && user.Password.Length >= 1)
        {
            return Ok(new { token = "1234567890" });
        }

        return Unauthorized();
    }

    [HttpPost("register")]
    public IActionResult Register([FromBody] RegisterDto registerDto)
    {
        var user = new User { Login = registerDto.Login, Password = registerDto.Password };

        _context.Users.Add(user);
        _centext.SaveChanges();
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
