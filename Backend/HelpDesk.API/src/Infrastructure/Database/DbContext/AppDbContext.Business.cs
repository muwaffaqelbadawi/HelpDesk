using HelpDesk.src.Infrastructure.Database.Data.Business.Entities;
using HelpDesk.src.Infrastructure.Services.SQLServerSequence;
using Microsoft.EntityFrameworkCore;

namespace HelpDesk.src.Infrastructure.Database.DbContext;

public partial class AppDbContext
{
    public AppDbContext(DbContextOptions<AppDbContext> options)
        : base(options)
    {
    }

    // Add DbSet properties for your business entities here


    // Business.Branches
    public DbSet<Branch> Branches { get; set; } = null!;

    // Business.Departments
    public DbSet<Department> Departments { get; set; } = null!;

    // Business.Employees
    public DbSet<Employee> Employees { get; set; } = null!;

    // Business.EmployeeStatuses
    public DbSet<EmployeeStatus> EmployeeStatuses { get; set; } = null!;



    // Business.Tickets
    public DbSet<Ticket> Tickets { get; set; } = null!;

    // Business.TicketStatuses
    public DbSet<TicketStatus> TicketStatuses { get; set; } = null!;

    // Business.TicketPriorities
    public DbSet<TicketPriority> TicketPriorities { get; set; } = null!;

    // Business.Histories
    public DbSet<TicketHistory> TicketHistories { get; set; } = null!;



    // Business.SeedHistories
    public DbSet<SeedHistory> SeedHistories { get; set; } = null!;

    private static void ConfigureBusinessModel(ModelBuilder modelBuilder)
    {
        // Business configuration


        // Business.Branches
        modelBuilder.Entity<Branch>(entity =>
        {
            entity.ToTable("Branches", "Business");

            // ID
            entity.HasKey(e => e.Id);

            // Code (Property)
            entity.Property(e => e.Code)
                .IsRequired()
                .HasMaxLength(50);

            // Code (Index)
            entity.HasIndex(e => e.Code)
                .IsUnique();

            // Name (Property)
            entity.Property(e => e.Name)
                .IsRequired()
                .HasMaxLength(100);

            // NormalizedName (Property)
            entity.Property(e => e.NormalizedName)
                .IsRequired()
                .HasMaxLength(100);

            // IsActive (Property)
            entity.Property(e => e.IsActive)
                .HasDefaultValue(true);

            // SortOrder (Property)
            entity.Property(e => e.SortOrder)
                .HasDefaultValue(0);
        });

        // Business.Departments
        modelBuilder.Entity<Department>(entity =>
        {
            entity.ToTable("Departments", "Business");

            // ID (Key)
            entity.HasKey(e => e.Id);

            // Code (Property)
            entity.Property(e => e.Code)
                .IsRequired()
                .HasMaxLength(50);

            // Code (Index)
            entity.HasIndex(e => e.Code)
                .IsUnique();

            // Name (Property)
            entity.Property(e => e.Name)
                .IsRequired()
                .HasMaxLength(100);

            // NormalizedName (Property)
            entity.Property(e => e.NormalizedName)
                .IsRequired()
                .HasMaxLength(100);

            // IsActive (Property)
            entity.Property(e => e.IsActive)
                .HasDefaultValue(true);

            // SortOrder (Property)
            entity.Property(e => e.SortOrder)
                .HasDefaultValue(0);
        });


        // Employee Sequence (BIGINT)
        modelBuilder.HasSequence<long>(
                BusinessSchema.EmployeeNumber,
                BusinessSchema.Name)
            .StartsAt(Numbering.Start)
            .IncrementsBy(increment: Numbering.Increment);

        // Business.Employees
        modelBuilder.Entity<Employee>(entity =>
        {
            entity.ToTable("Employees", "Business");

            // ID (Key)
            entity.HasKey(e => e.Id);

            // ID (Property)
            entity.Property(e => e.Id)
                .HasDefaultValueSql("NEWSEQUENTIALID()")
                .ValueGeneratedOnAdd();

            // FullEnName (Property)
            entity.Property(e => e.FullEnName)
                .HasMaxLength(200)
                .IsRequired();

            // FullArName (Property)
            entity.Property(e => e.FullArName)
                .HasMaxLength(200);

            // Number (Property)
            entity.Property(e => e.Number)
                .IsRequired()
                .HasMaxLength(100);

            // Number (Index)
            entity.HasIndex(e => e.Number)
                .IsUnique();

            // Status (Relation)
            entity.HasOne(e => e.Status)
                .WithMany(e => e.Employees)
                .HasForeignKey(e => e.StatusId)
                .OnDelete(DeleteBehavior.Restrict);

            // CreatedAt (Property)
            entity.Property(e => e.CreatedAt)
                .IsRequired()
                .HasColumnType("datetimeoffset")
                .HasDefaultValueSql("SYSUTCDATETIME()");

            // UpdatedAt (Property)
            entity.Property(e => e.UpdatedAt);

            // DeletedAt (Property)
            entity.Property(e => e.DeletedAt);






            // 1
            // User <-> Employee (Relation)
            entity.HasOne(e => e.User)
                .WithOne(e => e.Employee)
                .HasForeignKey<Employee>(e => e.UserId)
                .OnDelete(DeleteBehavior.Restrict);

            // 2
            // CreatedBy (Relation)
            entity.HasOne(e => e.CreatedBy)
                .WithMany(e => e.CreatedEmployees)
                .HasForeignKey(e => e.CreatedById)
                .OnDelete(DeleteBehavior.Restrict);

            // 3
            // UpdatedBy (Relation)
            entity.HasOne(e => e.UpdatedBy)
                .WithMany(e => e.UpdatedEmployees)
                .HasForeignKey(e => e.UpdatedById)
                .OnDelete(DeleteBehavior.Restrict);

            // 4
            // DeletedBy (Relation)
            entity.HasOne(e => e.DeletedBy)
                .WithMany(e => e.DeletedEmployees)
                .HasForeignKey(e => e.DeletedById)
                .OnDelete(DeleteBehavior.Restrict);






            //Department(Relation)
            entity.HasOne(e => e.Department)
                .WithMany(e => e.Employees)
                .HasForeignKey(e => e.DepartmentId)
                .OnDelete(DeleteBehavior.Restrict);

            //Branch(Relation)
            entity.HasOne(e => e.Branch)
                .WithMany(e => e.Employees)
                .HasForeignKey(e => e.BranchId)
                .OnDelete(DeleteBehavior.Restrict);

            // RowVersion (Property)
            entity.Property(e => e.RowVersion)
                .IsRowVersion();

            entity.Property(e => e.IsDeleted)
                .HasDefaultValue(false);

            // Employee Query filter (IsDeleted)
            entity.HasQueryFilter(e => !e.IsDeleted);
        });

        // Business.EmployeeStatuses
        modelBuilder.Entity<EmployeeStatus>(entity =>
        {
            entity.ToTable("EmployeeStatuses", "Business");

            // ID (Key)
            entity.HasKey(e => e.Id);

            // Code (Property)
            entity.Property(e => e.Code)
                .IsRequired()
                .HasMaxLength(50);

            // Code (Index)
            entity.HasIndex(e => e.Code)
                .IsUnique();

            // Name (Property)
            entity.Property(e => e.Name)
                .IsRequired()
                .HasMaxLength(100);

            // NormalizedName (Property)
            entity.Property(e => e.NormalizedName)
                .IsRequired()
                .HasMaxLength(100);

            // IsActive (Property)
            entity.Property(e => e.IsActive)
                .HasDefaultValue(true);

            // SortOrder (Property)
            entity.Property(e => e.SortOrder)
                .HasDefaultValue(0);
        });

        // TicketSequence (BIGINT)
        modelBuilder.HasSequence<long>(
                BusinessSchema.TicketNumber,
                BusinessSchema.Name)
           .StartsAt(Numbering.Start)
           .IncrementsBy(Numbering.Increment);

        // Business.Tickets
        modelBuilder.Entity<Ticket>(entity =>
        {
            // Table name
            entity.ToTable("Tickets", "Business");

            // ID (Key)
            entity.HasKey(e => e.Id);

            // ID (Property)
            entity.Property(e => e.Id)
                .IsRequired()
                .HasDefaultValueSql("NEWSEQUENTIALID()")
                .ValueGeneratedOnAdd();

            // Number (Property)
            entity.Property(e => e.Number)
                .IsRequired()
                .HasMaxLength(100);

            // Title (Property)
            entity.Property(e => e.Title)
                .IsRequired()
                .HasMaxLength(200);

            // Subject (Property)
            entity.Property(e => e.Subject)
                .IsRequired()
                .HasMaxLength(1000);

            // Status (Relation)
            entity.HasOne(e => e.Status)
                .WithMany()
                .HasForeignKey(e => e.StatusId)
                .OnDelete(DeleteBehavior.Restrict);

            // Priority (Relation)
            entity.HasOne(e => e.Priority)
                .WithMany()
                .HasForeignKey(e => e.PriorityId)
                .OnDelete(DeleteBehavior.Restrict);

            // CreatedBy (Relation)
            entity.HasOne(e => e.CreatedBy)
                .WithMany(e => e.CreatedTickets)
                .HasForeignKey(e => e.CreatedById)
                .OnDelete(DeleteBehavior.Restrict);

            // CreatedAt (Property)
            entity.Property(e => e.CreatedAt)
                .IsRequired()
                .HasColumnType("datetimeoffset")
                .HasDefaultValueSql("SYSUTCDATETIME()");

            // AssignedBy (Relation)
            entity.HasOne(e => e.AssignedBy)
                .WithMany(e => e.AssignedByTickets)
                .HasForeignKey(e => e.AssignedById)
                .OnDelete(DeleteBehavior.Restrict);

            // AssignedTo (Relation)
            entity.HasOne(e => e.AssignedTo)
                .WithMany(e => e.AssignedToTickets)
                .HasForeignKey(e => e.AssignedToId)
                .OnDelete(DeleteBehavior.Restrict);

            // AssignedAt (Property)
            entity.Property(e => e.AssignedAt);

            // UpdatedBy (Relation)
            entity.HasOne(e => e.UpdatedBy)
                .WithMany(e => e.UpdatedTickets)
                .HasForeignKey(e => e.UpdatedById)
                .OnDelete(DeleteBehavior.Restrict);

            // UpdatedAt (Property)
            entity.Property(e => e.UpdatedAt);

            // DeletedBy (Relation)
            entity.HasOne(e => e.DeletedBy)
                .WithMany(e => e.DeletedTickets)
                .HasForeignKey(e => e.DeletedById)
                .OnDelete(DeleteBehavior.Restrict);

            // DeletedAt (Property)
            entity.Property(e => e.DeletedAt);

            // ClosedBy (Relation)
            entity.HasOne(e => e.ClosedBy)
                .WithMany(e => e.ClosedTickets)
                .HasForeignKey(e => e.ClosedById)
                .OnDelete(DeleteBehavior.Restrict);

            // ClosedAt (Property)
            entity.Property(e => e.ClosedAt);

            // IsDeleted (Property)
            entity.Property(e => e.IsDeleted)
                .HasDefaultValue(false);

            // RowVersion (Property)
            entity.Property(e => e.RowVersion)
                .IsRowVersion();

            // Ticket Query filter
            entity.HasQueryFilter(e => !e.IsDeleted);
        });

        // Business.TicketStatuses
        modelBuilder.Entity<TicketStatus>(entity =>
        {
            // Table name
            entity.ToTable("TicketStatuses", "Business");

            // Id (Key)
            entity.HasKey(e => e.Id);

            // Code (Property)
            entity.Property(e => e.Code)
                .IsRequired()
                .HasMaxLength(50);

            // Code (Index)
            entity.HasIndex(e => e.Code)
                .IsUnique();

            // Name (Index)
            entity.Property(e => e.Name)
                .IsRequired()
                .HasMaxLength(100);

            // NormalizedName (Property)
            entity.Property(e => e.NormalizedName)
                .IsRequired()
                .HasMaxLength(100);

            // IsActive (Property)
            entity.Property(e => e.IsActive)
                .HasDefaultValue(true);

            // SortOrder (Property)
            entity.Property(e => e.SortOrder)
                .HasDefaultValue(0);
        });

        // Business.TicketPriorities
        modelBuilder.Entity<TicketPriority>(entity =>
        {
            // Table name
            entity.ToTable("TicketPriorities", "Business");

            // ID (Key)
            entity.HasKey(e => e.Id);

            // Code (Property)
            entity.Property(e => e.Code)
                .IsRequired()
                .HasMaxLength(50);

            // Code (Index)
            entity.HasIndex(e => e.Code)
                .IsUnique();

            // Name (Property)
            entity.Property(e => e.Name)
                .IsRequired()
                .HasMaxLength(100);

            // NormalizedName (Property)
            entity.Property(e => e.NormalizedName)
                .IsRequired()
                .HasMaxLength(100);

            // IsActive (Property)
            entity.Property(e => e.IsActive)
                .HasDefaultValue(true);

            // SortOrder (Property)
            entity.Property(e => e.SortOrder)
                .HasDefaultValue(0);
        });

        // Business.TicketHistory
        modelBuilder.Entity<TicketHistory>(entity =>
        {
            // Table name
            entity.ToTable("TicketHistory", "Business");

            // ID
            entity.HasKey(e => e.Id);

            // Type (Property)
            entity.Property(e => e.Type)
                .HasMaxLength(100);

            // Description (Property)
            entity.Property(e => e.Description)
                .HasMaxLength(200);

            // OldValueId (Property)
            entity.Property(e => e.OldValueId)
                .HasMaxLength(200);

            // NewValueId (Property)
            entity.Property(e => e.NewValueId)
                .HasMaxLength(200);

            // CreatedAt (Property)
            entity.Property(e => e.CreatedAt)
                .IsRequired()
                .HasColumnType("datetimeoffset")
                .HasDefaultValueSql("SYSUTCDATETIME()");

            entity.HasOne(e => e.Ticket)
                .WithMany(e => e.Histories)
                .HasForeignKey(e => e.TicketId)
                .IsRequired()
                .OnDelete(DeleteBehavior.Restrict);

            // TicketHistory Query filter
            entity.HasQueryFilter(e => !e.Ticket.IsDeleted);
        });

        // Business.SeedHistory
        modelBuilder.Entity<SeedHistory>(entity =>
        {
            // Table name
            entity.ToTable("SeedHistory", "Business");

            // ID (Composite key)
            entity.HasKey(e => new
            {
                e.Key,
                e.Version,
                e.Scope
            });

            // Key (Property)
            entity.Property(e => e.Key)
                .IsRequired()
                .HasMaxLength(200);

            // Version (Property)
            entity.Property(e => e.Version)
                .IsRequired()
                .HasMaxLength(50);

            // Scope (Property)
            entity.Property(e => e.Scope)
                .IsRequired()
                .HasMaxLength(200);

            // AppliedAt (Property)
            entity.Property(e => e.AppliedAt)
                .IsRequired();
        });
    }
}
