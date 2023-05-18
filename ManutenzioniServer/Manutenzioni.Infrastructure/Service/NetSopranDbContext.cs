using Manutenzioni.Domain.Models;
using Manutenzioni.Domain.Models.StoreProcedure;
using Microsoft.EntityFrameworkCore;

namespace Manutenzioni.Infrastructure.Service
{
    public class NetSopranDbContext : DbContext
    {
        public NetSopranDbContext(DbContextOptions<NetSopranDbContext> options) : base(options)
        {

        }

        public virtual DbSet<SP_GetHomeCaricoGlauco> SP_GetHomeCaricoGlauco { get; set; }

        public virtual DbSet<MA_CustSupp> MA_CustSupp { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder) {
            modelBuilder.Entity<MA_CustSupp>()
               .HasKey(a => new { a.CustSupp });

            modelBuilder.Entity<SP_GetHomeCaricoGlauco>().HasNoKey();
        }
    }
}
