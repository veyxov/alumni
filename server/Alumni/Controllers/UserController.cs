using Microsoft.AspNetCore.Mvc;
using Alumni.Models;


namespace Alumni.Controllers;

[ApiController]
[Route("api/users")]
public class UserController : ControllerBase
{
    private readonly DataContext _context;
    
    public UserController(DataContext context)
    {
        _context = context;
    }

    [HttpPost("{id}/personal-info")]
    public ActionResult<User> Edit(int id, [FromBody] EditPersonalInfoDTO dto)
    {
        var user = _context.Users.FirstOrDefault(
            u => u.Id == id
        );

		if (user is null) {
			return NotFound();
		}

        user.Name = dto.Name;
		user.Login = dto.Email;

		_context.SaveChanges();

        return user;
    }

    [HttpGet("{id}")]
    public ActionResult<User> Get(int id)
    {
        var user = _context.Users.FirstOrDefault(
            u => u.Id == id
        );

        if (user is null)
        {
			return NotFound();
    	}

        return user;
    }
}

public class EditPersonalInfoDTO
{
    public string? Name { get; set; }

    public string? Email { get; set; }
}