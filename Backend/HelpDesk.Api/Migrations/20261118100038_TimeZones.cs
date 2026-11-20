using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace HelpDesk.Migrations
{
    /// <inheritdoc />
    public partial class TimeZones : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "TimeZone",
                schema: "Auth",
                table: "Users");

            migrationBuilder.AlterColumn<int>(
                name: "PreferredLanguage",
                schema: "Auth",
                table: "Users",
                type: "int",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int",
                oldDefaultValue: 0);

            migrationBuilder.AddColumn<Guid>(
                name: "TimeZoneId",
                schema: "Auth",
                table: "Users",
                type: "uniqueidentifier",
                nullable: true);

            migrationBuilder.CreateTable(
                name: "TimeZones",
                schema: "Auth",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    Name = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    Release = table.Column<string>(type: "nvarchar(10)", maxLength: 10, nullable: false),
                    IsActive = table.Column<bool>(type: "bit", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_TimeZones", x => x.Id);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Users_TimeZoneId",
                schema: "Auth",
                table: "Users",
                column: "TimeZoneId");

            migrationBuilder.CreateIndex(
                name: "NameIndex",
                schema: "Auth",
                table: "TimeZones",
                column: "Name",
                unique: true);

            migrationBuilder.AddForeignKey(
                name: "FK_Users_TimeZones_TimeZoneId",
                schema: "Auth",
                table: "Users",
                column: "TimeZoneId",
                principalSchema: "Auth",
                principalTable: "TimeZones",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Users_TimeZones_TimeZoneId",
                schema: "Auth",
                table: "Users");

            migrationBuilder.DropTable(
                name: "TimeZones",
                schema: "Auth");

            migrationBuilder.DropIndex(
                name: "IX_Users_TimeZoneId",
                schema: "Auth",
                table: "Users");

            migrationBuilder.DropColumn(
                name: "TimeZoneId",
                schema: "Auth",
                table: "Users");

            migrationBuilder.AlterColumn<int>(
                name: "PreferredLanguage",
                schema: "Auth",
                table: "Users",
                type: "int",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "int",
                oldNullable: true);

            migrationBuilder.AddColumn<string>(
                name: "TimeZone",
                schema: "Auth",
                table: "Users",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "Asia/Riyadh");
        }
    }
}
