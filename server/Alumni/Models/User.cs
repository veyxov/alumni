namespace Alumni.Models;

public class User : EntityBase
{
    public required string Login { get; set; }
    public required string Password { get; set; } //  TODO: Save hash for password
}