using Microsoft.AspNetCore.Mvc;
using Alumni.Models;
using Alumni.Dtos;
using Microsoft.EntityFrameworkCore;

namespace Alumni.Controllers;

[ApiController]
[Route("api/[controller]")]
public class UserController : ControllerBase
{
    private readonly DataContext _context;

    public UserController(DataContext context)
    {
        _context = context;
    }

    [HttpPut("{id}")]
    public async Task<ActionResult<User>> Edit(int id, [FromBody] EditPersonalInfoDTO dto)
    {
        var user = await _context.Users.FirstOrDefaultAsync(u => u.Id == id);

        if (user is null)
        {
            return NotFound();
        }

        Task.Delay(1000).Wait();
        user.Name = dto.Name ?? user.Name;
        user.Login = dto.Email ?? user.Login;
        user.Phone = dto.Phone ?? user.Phone;

        await _context.SaveChangesAsync();

        return Ok(user);
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<User>> Get(int id)
    {
        var user = await _context.Users.FirstOrDefaultAsync(u => u.Id == id);

        if (user is null)
        {
            return NotFound();
        }

        return user;
    }
}

public class EditUserDTO
{
    public string? Name { get; set; }
    public string? Email { get; set; }
    public string? Phone { get; set; }
}
