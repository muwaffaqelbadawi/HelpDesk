using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace HelpDesk.Migrations
{
    /// <inheritdoc />
    public partial class Remove_EmployeeStatus : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Employees_EmployeeStatuses_StatusId",
                schema: "Business",
                table: "Employees");

            migrationBuilder.DropTable(
                name: "EmployeeStatuses",
                schema: "Business");

            migrationBuilder.DropIndex(
                name: "IX_Employees_StatusId",
                schema: "Business",
                table: "Employees");

            migrationBuilder.DropColumn(
                name: "StatusId",
                schema: "Business",
                table: "Employees");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<Guid>(
                name: "StatusId",
                schema: "Business",
                table: "Employees",
                type: "uniqueidentifier",
                nullable: true);

            migrationBuilder.CreateTable(
                name: "EmployeeStatuses",
                schema: "Business",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    Code = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: false),
                    IsActive = table.Column<bool>(type: "bit", nullable: false, defaultValue: true),
                    Name = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: false),
                    NormalizedName = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: false),
                    SortOrder = table.Column<int>(type: "int", nullable: false, defaultValue: 0)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_EmployeeStatuses", x => x.Id);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Employees_StatusId",
                schema: "Business",
                table: "Employees",
                column: "StatusId");

            migrationBuilder.CreateIndex(
                name: "IX_EmployeeStatuses_Code",
                schema: "Business",
                table: "EmployeeStatuses",
                column: "Code",
                unique: true);

            migrationBuilder.AddForeignKey(
                name: "FK_Employees_EmployeeStatuses_StatusId",
                schema: "Business",
                table: "Employees",
                column: "StatusId",
                principalSchema: "Business",
                principalTable: "EmployeeStatuses",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
