namespace Alumni.Models;

public class User : BaseEntity
{
    public required string Login { get; set; }
    public required string Password { get; set; } //  TODO: Save hash for password
    public required string Name { get; set; }

    public string? Phone { get; set; }
    public string? Address { get; set; }
    public string Email => Login;
    public DateTime? Birthday { get; set; }
    public Gender Gender { get; set; }
}

public enum Gender {
    Female = 0,
    Male = 1
}
