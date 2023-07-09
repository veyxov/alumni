namespace Alumni.Models;

public class User : BaseEntity
{
    public required string Login { get; set; }
    public required string Password { get; set; } //  TODO: Save hash for password
    public required string Name { get; set; }
}
