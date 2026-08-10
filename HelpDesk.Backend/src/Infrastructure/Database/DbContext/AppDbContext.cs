using HelpDesk.src.Infrastructure.Database.Identity.Auth.Entities;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace HelpDesk.src.Infrastructure.Database.DbContext;

public partial class AppDbContext
    : IdentityDbContext<
        ApplicationUser,
        ApplicationRole,
        Guid,
        ApplicationUserClaim,
        ApplicationUserRole,
        ApplicationUserLogin,
        ApplicationRoleClaim,
        ApplicationUserToken>
{
    // Add DbSet properties for your identity entities here


    // Auth.UserStatuses
    public DbSet<ApplicationUserStatus> UserStatuses { get; set; } = null!;

    // Auth.Models
    public DbSet<ApplicationModule> Modules { get; set; } = null!;

    // Auth.Permissions
    public DbSet<ApplicationPermission> Permissions { get; set; } = null!;

    // Auth.RolePermissionModules
    public DbSet<ApplicationRolePermissionModule> RolePermissionModules { get; set; } = null!;

    // RefreshTokens
    public DbSet<ApplicationRefreshToken> RefreshTokens { get; set; } = null!;



    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);

        // Auth.Users
        modelBuilder.Entity<ApplicationUser>(entity =>
        {
            // Table name
            entity.ToTable("Users", "Auth");

            // Login Identity (NormalizedUserName, NormalizedEmail)

            // NormalizedUserName (Index)
            entity.HasIndex(e => e.NormalizedUserName)
                .HasDatabaseName("UserNameIndex")
                .IsUnique()
                .HasFilter("[IsDeleted] = 0 AND [NormalizedUserName] IS NOT NULL");

            // NormalizedEmail (Index)
            entity.HasIndex(e => e.NormalizedEmail)
                .IsUnique();

            // Employee (Relation)
            entity.HasOne(e => e.Employee)
               .WithOne(e => e.User)
               .HasForeignKey<ApplicationUser>(e => e.EmployeeId)
               .OnDelete(DeleteBehavior.Restrict);

            // EmployeeId (Index)
            entity.HasIndex(e => e.EmployeeId)
                .IsUnique();

            // Status (Relation)
            entity.HasOne(e => e.Status)
                .WithMany(e => e.Users)
                .HasForeignKey(e => e.StatusId)
                .OnDelete(DeleteBehavior.Restrict);

            // LastPasswordChangedAt (Property)
            entity.Property(e => e.LastPasswordChangedAt);

            // LastPasswordChangedById (Property)
            entity.Property(e => e.LastPasswordChangedById);

            // MustChangePassword (Property)
            entity.Property(e => e.MustChangePassword)
                .HasDefaultValue(true);

            // LastLoginAt (Property)
            entity.Property(e => e.LastLoginAt);

            // CreatedBy (Relation)
            entity.HasOne(e => e.CreatedBy)
                .WithMany()
                .HasForeignKey(e => e.CreatedById)
                .OnDelete(DeleteBehavior.Restrict);

            // CreatedAt (Property)
            entity.Property(e => e.CreatedAt)
                .IsRequired()
                .HasColumnType("datetimeoffset")
                .HasDefaultValueSql("SYSUTCDATETIME()");

            // UpdatedBy (Relation)
            entity.HasOne(e => e.UpdatedBy)
                .WithMany()
                .HasForeignKey(e => e.UpdatedById)
                .OnDelete(DeleteBehavior.Restrict);

            // UpdatedAt (Property)
            entity.Property(e => e.UpdatedAt);

            // LockedBy (Relation)
            entity.HasOne(e => e.LockedBy)
                .WithMany()
                .HasForeignKey(e => e.LockedById)
                .OnDelete(DeleteBehavior.Restrict);

            // LockedAt (Property)
            entity.Property(e => e.LockedAt);

            // DeletedBy (Relation)
            entity.HasOne(e => e.DeletedBy)
                .WithMany()
                .HasForeignKey(e => e.DeletedById)
                .OnDelete(DeleteBehavior.Restrict);

            // DeletedAt (Property)
            entity.Property(e => e.DeletedAt);

            // RowVersion (Property)
            entity.Property(e => e.RowVersion)
                .IsRowVersion();

            // UserRoles (Relation)
            entity.HasMany(u => u.UserRoles)
                .WithOne(ur => ur.User)
                .HasForeignKey(ur => ur.UserId);

            // IsDeleted (Property)
            entity.Property(e => e.IsDeleted)
                .HasDefaultValue(false);

            // User query filter (IsDeleted)
            entity.HasQueryFilter(e => !e.IsDeleted);
        });

        // Auth.UserStatuses
        modelBuilder.Entity<ApplicationUserStatus>(entity =>
        {
            entity.ToTable("UserStatuses", "Auth");

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

            // IsActive (Property)
            entity.Property(e => e.IsActive)
                .HasDefaultValue(true);

            // SortOrder (Property)
            entity.Property(e => e.SortOrder)
                .HasDefaultValue(0);
        });

        // Auth.UserClaims
        modelBuilder.Entity<ApplicationUserClaim>(entity =>
        {
            entity.ToTable("UserClaims", "Auth");
        });

        // Auth.UserTokens
        modelBuilder.Entity<ApplicationUserToken>(entity =>
        {
            entity.ToTable("UserTokens", "Auth");
        });

        // Auth.Roles
        modelBuilder.Entity<ApplicationRole>(entity =>
        {
            entity.ToTable("Roles", "Auth");

            // Code (Property)
            entity.Property(e => e.Code)
                .IsRequired()
                .HasMaxLength(50);

            // Code (Index)
            entity.HasIndex(e => e.Code)
                .IsUnique();

            // Name (Property)
            entity.Property(e => e.Name)
                .IsRequired();

            // NormalizedName (Property)
            entity.Property(e => e.NormalizedName)
                .IsRequired();

            // IsActive (Property)
            entity.Property(e => e.IsActive)
                .HasDefaultValue(true);

            // SortOrder (Property)
            entity.Property(e => e.SortOrder)
                .HasDefaultValue(0);
        });

        // Auth.RoleClaims
        modelBuilder.Entity<ApplicationRoleClaim>(entity =>
        {
            entity.ToTable("RoleClaims", "Auth");
        });

        // Auth.UserRoles
        modelBuilder.Entity<ApplicationUserRole>(entity =>
        {
            entity.ToTable("UserRoles", "Auth");


            // ID (Composite key)
            entity.HasKey(e => new { e.UserId, e.RoleId });

            // User -> UserRoles
            entity.HasOne(e => e.User)
                .WithMany(u => u.UserRoles)
                .HasForeignKey(e => e.UserId);

            // Role -> UserRoles
            entity.HasOne(e => e.Role)
                .WithMany(r => r.UserRoles)
                .HasForeignKey(e => e.RoleId);

            // AssignedBy (Relation)
            entity.HasOne(e => e.AssignedBy)
                .WithMany()
                .HasForeignKey(e => e.AssignedById)
                .OnDelete(DeleteBehavior.Restrict);

            // RemovedBy (Relation)
            entity.HasOne(e => e.RemovedBy)
                .WithMany()
                .HasForeignKey(e => e.RemovedById)
                .OnDelete(DeleteBehavior.Restrict);

            // soft-delete filter
            entity.HasQueryFilter(e => e.RemovedAt == null);
        });

        // Auth.Modules (Access screen/area)
        modelBuilder.Entity<ApplicationModule>(entity =>
        {
            entity.ToTable("Modules", "Auth");

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

        // Auth.Permissions
        modelBuilder.Entity<ApplicationPermission>(entity =>
        {
            entity.ToTable("Permissions", "Auth");

            // ID
            entity.HasKey(e => e.Id);

            // Code
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

        // Auth.RolePermissionModules
        modelBuilder.Entity<ApplicationRolePermissionModule>(entity =>
        {
            entity.ToTable("RolePermissionModules", "Auth");

            // ID (composite key)
            entity.HasKey(e => new
            {
                e.RoleId,
                e.PermissionId,
                e.ModuleId
            });

            // Module (Relation)
            entity.HasOne(e => e.Module)
                .WithMany(e => e.RolePermissionModules)
                .HasForeignKey(e => e.ModuleId)
                .OnDelete(DeleteBehavior.Restrict);

            // Role (Relation)
            entity.HasOne(e => e.Role)
                .WithMany(e => e.RolePermissionModules)
                .HasForeignKey(e => e.RoleId)
                .OnDelete(DeleteBehavior.Restrict);

            // Permissions (Relation)
            entity.HasOne(e => e.Permission)
                .WithMany(e => e.RolePermissionModules)
                .HasForeignKey(e => e.PermissionId)
                .OnDelete(DeleteBehavior.Restrict);
        });

        // Auth.ExternalLogins
        modelBuilder.Entity<ApplicationUserLogin>(entity =>
        {
            entity.ToTable("ExternalLogins", "Auth");
        });

        // Auth.RefreshTokens
        modelBuilder.Entity<ApplicationRefreshToken>(entity =>
        {
            entity.ToTable("RefreshTokens", "Auth");

            // ID
            entity.HasKey(e => e.Id);

            // User (Relation)
            entity.HasOne(e => e.User)
                .WithMany(e => e.RefreshTokens)
                .HasForeignKey(e => e.UserId)
                .OnDelete(DeleteBehavior.Restrict);

            // UserAgent (Property)
            entity.Property(e => e.UserAgent)
                .HasMaxLength(500);


            // Token (Property)
            entity.Property(e => e.Token)
                .IsRequired()
                .HasMaxLength(200);

            // Token (Index)
            entity.HasIndex(e => e.Token)
                .IsUnique();

            // CreatedByIp (Property)
            entity.Property(e => e.CreatedByIp);

            // CreatedAt (Property)
            entity.Property(e => e.CreatedAt)
                .HasPrecision(3)
                .IsRequired();

            // ExpiresAt (Property)
            entity.Property(e => e.ExpiresAt)
                .HasPrecision(3);

            // RevokedByIp (Property)
            entity.Property(e => e.RevokedByIp)
                .HasMaxLength(200);

            // RevokedAt (Property)
            entity.Property(e => e.RevokedAt)
                .HasPrecision(3);

            // RefreshTokens query filter for deleted users
            entity.HasQueryFilter(e => !e.User.IsDeleted);

            // RefreshTokens query filter for Revoked refresh tokens
            entity.HasQueryFilter(e =>
                e.RevokedAt == null &&
                !e.User.IsDeleted);
        });

        ConfigureBusinessModel(modelBuilder);
    }
}
