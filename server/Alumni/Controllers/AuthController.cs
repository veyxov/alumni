global using Microsoft.AspNetCore.Mvc;

[ApiController]
[Route("api/auth")]
public class AuthController : ControllerBase {
    // TODO
    [HttpPost("login")]
    public IActionResult Login([FromBody] LoginDto user) {
        if (user.Login == "admin@admin.com" && user.Password.Length >= 1) {
            return Ok(new {token = "1234567890"});
        }

        return Unauthorized();
    }
}

public class LoginDto
{
    public required string Login { get; set; }
    public required string Password { get; set; }
}
