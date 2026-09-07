using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace HelpDesk.Migrations
{
    /// <inheritdoc />
    public partial class UserSession : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "FailedLoginCount",
                schema: "Auth",
                table: "Users",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<DateTimeOffset>(
                name: "LastFailedLoginAt",
                schema: "Auth",
                table: "Users",
                type: "datetimeoffset",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "PreferredLanguage",
                schema: "Auth",
                table: "Users",
                type: "int",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "TimeZone",
                schema: "Auth",
                table: "Users",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<Guid>(
                name: "CountryId",
                schema: "Business",
                table: "Employees",
                type: "uniqueidentifier",
                nullable: false,
                defaultValue: new Guid("00000000-0000-0000-0000-000000000000"));

            migrationBuilder.AddColumn<string>(
                name: "JobTitle",
                schema: "Business",
                table: "Employees",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "PhotoUrl",
                schema: "Business",
                table: "Employees",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.CreateTable(
                name: "UserSession",
                schema: "Auth",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    UserId = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    UserAgent = table.Column<string>(type: "nvarchar(1000)", maxLength: 1000, nullable: true),
                    Browser = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: true),
                    IpAddress = table.Column<string>(type: "nvarchar(45)", maxLength: 45, nullable: true),
                    CreatedAt = table.Column<DateTimeOffset>(type: "datetimeoffset", nullable: false),
                    LastActivityAt = table.Column<DateTimeOffset>(type: "datetimeoffset", nullable: true),
                    DeletedById = table.Column<Guid>(type: "uniqueidentifier", nullable: true),
                    DeletedAt = table.Column<DateTimeOffset>(type: "datetimeoffset", nullable: true),
                    IsDeleted = table.Column<bool>(type: "bit", nullable: false, defaultValue: false),
                    ExpiresAt = table.Column<DateTimeOffset>(type: "datetimeoffset", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_UserSession", x => x.Id);
                    table.ForeignKey(
                        name: "FK_UserSession_UserSession_DeletedById",
                        column: x => x.DeletedById,
                        principalSchema: "Auth",
                        principalTable: "UserSession",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_UserSession_Users_UserId",
                        column: x => x.UserId,
                        principalSchema: "Auth",
                        principalTable: "Users",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Employees_CountryId",
                schema: "Business",
                table: "Employees",
                column: "CountryId");

            migrationBuilder.CreateIndex(
                name: "IX_UserSession_DeletedById",
                schema: "Auth",
                table: "UserSession",
                column: "DeletedById");

            migrationBuilder.CreateIndex(
                name: "IX_UserSession_UserId",
                schema: "Auth",
                table: "UserSession",
                column: "UserId");

            migrationBuilder.AddForeignKey(
                name: "FK_Employees_Countries_CountryId",
                schema: "Business",
                table: "Employees",
                column: "CountryId",
                principalSchema: "Business",
                principalTable: "Countries",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Employees_Countries_CountryId",
                schema: "Business",
                table: "Employees");

            migrationBuilder.DropTable(
                name: "UserSession",
                schema: "Auth");

            migrationBuilder.DropIndex(
                name: "IX_Employees_CountryId",
                schema: "Business",
                table: "Employees");

            migrationBuilder.DropColumn(
                name: "FailedLoginCount",
                schema: "Auth",
                table: "Users");

            migrationBuilder.DropColumn(
                name: "LastFailedLoginAt",
                schema: "Auth",
                table: "Users");

            migrationBuilder.DropColumn(
                name: "PreferredLanguage",
                schema: "Auth",
                table: "Users");

            migrationBuilder.DropColumn(
                name: "TimeZone",
                schema: "Auth",
                table: "Users");

            migrationBuilder.DropColumn(
                name: "CountryId",
                schema: "Business",
                table: "Employees");

            migrationBuilder.DropColumn(
                name: "JobTitle",
                schema: "Business",
                table: "Employees");

            migrationBuilder.DropColumn(
                name: "PhotoUrl",
                schema: "Business",
                table: "Employees");
        }
    }
}
