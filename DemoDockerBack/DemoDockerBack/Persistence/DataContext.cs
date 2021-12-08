using DemoDockerBack.Domain;
using Microsoft.EntityFrameworkCore;

namespace DemoDockerBack.Persistence
{
    public class DataContext: DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options) { }
        public DbSet<User> Users { get; set; }
    }
}