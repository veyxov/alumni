using Alumni.Models;
using Microsoft.EntityFrameworkCore;

public sealed class DataContext : DbContext
{
    public DataContext(DbContextOptions<DataContext> options)
        : base(options) { }

    public DbSet<User> Users => Set<User>();

    public DbSet<University> Universities => Set<University>();
    public DbSet<EducationInfo> EducationInfos => Set<EducationInfo>();
}
