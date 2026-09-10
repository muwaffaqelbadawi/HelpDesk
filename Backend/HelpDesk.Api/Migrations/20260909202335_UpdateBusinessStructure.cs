using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace HelpDesk.Migrations
{
    /// <inheritdoc />
    public partial class UpdateBusinessStructure : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Tickets_TicketPriorities_TicketPriorityId",
                schema: "Business",
                table: "Tickets");

            migrationBuilder.DropForeignKey(
                name: "FK_Tickets_TicketStatuses_TicketStatusId",
                schema: "Business",
                table: "Tickets");

            migrationBuilder.DropIndex(
                name: "IX_Tickets_TicketPriorityId",
                schema: "Business",
                table: "Tickets");

            migrationBuilder.DropIndex(
                name: "IX_Tickets_TicketStatusId",
                schema: "Business",
                table: "Tickets");

            migrationBuilder.DropColumn(
                name: "TicketPriorityId",
                schema: "Business",
                table: "Tickets");

            migrationBuilder.DropColumn(
                name: "TicketStatusId",
                schema: "Business",
                table: "Tickets");

            migrationBuilder.DropColumn(
                name: "PositionId",
                schema: "Business",
                table: "Employees");

            migrationBuilder.DropColumn(
                name: "ProfessionId",
                schema: "Business",
                table: "Employees");

            migrationBuilder.AlterColumn<string>(
                name: "FullArName",
                schema: "Business",
                table: "Employees",
                type: "nvarchar(200)",
                maxLength: 200,
                nullable: true,
                oldClrType: typeof(string),
                oldType: "nvarchar(200)",
                oldMaxLength: 200);

            migrationBuilder.CreateTable(
                name: "Companies",
                schema: "Business",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    Code = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: false),
                    Name = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: false),
                    NormalizedName = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: false),
                    IsActive = table.Column<bool>(type: "bit", nullable: false, defaultValue: true),
                    SortOrder = table.Column<int>(type: "int", nullable: false, defaultValue: 0)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Companies", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Sectors",
                schema: "Business",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    Code = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: false),
                    Name = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: false),
                    NormalizedName = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: false),
                    IsActive = table.Column<bool>(type: "bit", nullable: false, defaultValue: true),
                    SortOrder = table.Column<int>(type: "int", nullable: false, defaultValue: 0)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Sectors", x => x.Id);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Employees_CompanyId",
                schema: "Business",
                table: "Employees",
                column: "CompanyId");

            migrationBuilder.CreateIndex(
                name: "IX_Employees_SectorId",
                schema: "Business",
                table: "Employees",
                column: "SectorId");

            migrationBuilder.CreateIndex(
                name: "IX_Companies_Code",
                schema: "Business",
                table: "Companies",
                column: "Code",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_Sectors_Code",
                schema: "Business",
                table: "Sectors",
                column: "Code",
                unique: true);

            migrationBuilder.AddForeignKey(
                name: "FK_Employees_Companies_CompanyId",
                schema: "Business",
                table: "Employees",
                column: "CompanyId",
                principalSchema: "Business",
                principalTable: "Companies",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Employees_Sectors_SectorId",
                schema: "Business",
                table: "Employees",
                column: "SectorId",
                principalSchema: "Business",
                principalTable: "Sectors",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Employees_Companies_CompanyId",
                schema: "Business",
                table: "Employees");

            migrationBuilder.DropForeignKey(
                name: "FK_Employees_Sectors_SectorId",
                schema: "Business",
                table: "Employees");

            migrationBuilder.DropTable(
                name: "Companies",
                schema: "Business");

            migrationBuilder.DropTable(
                name: "Sectors",
                schema: "Business");

            migrationBuilder.DropIndex(
                name: "IX_Employees_CompanyId",
                schema: "Business",
                table: "Employees");

            migrationBuilder.DropIndex(
                name: "IX_Employees_SectorId",
                schema: "Business",
                table: "Employees");

            migrationBuilder.AddColumn<Guid>(
                name: "TicketPriorityId",
                schema: "Business",
                table: "Tickets",
                type: "uniqueidentifier",
                nullable: true);

            migrationBuilder.AddColumn<Guid>(
                name: "TicketStatusId",
                schema: "Business",
                table: "Tickets",
                type: "uniqueidentifier",
                nullable: true);

            migrationBuilder.AlterColumn<string>(
                name: "FullArName",
                schema: "Business",
                table: "Employees",
                type: "nvarchar(200)",
                maxLength: 200,
                nullable: false,
                defaultValue: "",
                oldClrType: typeof(string),
                oldType: "nvarchar(200)",
                oldMaxLength: 200,
                oldNullable: true);

            migrationBuilder.AddColumn<Guid>(
                name: "PositionId",
                schema: "Business",
                table: "Employees",
                type: "uniqueidentifier",
                nullable: true);

            migrationBuilder.AddColumn<Guid>(
                name: "ProfessionId",
                schema: "Business",
                table: "Employees",
                type: "uniqueidentifier",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Tickets_TicketPriorityId",
                schema: "Business",
                table: "Tickets",
                column: "TicketPriorityId");

            migrationBuilder.CreateIndex(
                name: "IX_Tickets_TicketStatusId",
                schema: "Business",
                table: "Tickets",
                column: "TicketStatusId");

            migrationBuilder.AddForeignKey(
                name: "FK_Tickets_TicketPriorities_TicketPriorityId",
                schema: "Business",
                table: "Tickets",
                column: "TicketPriorityId",
                principalSchema: "Business",
                principalTable: "TicketPriorities",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Tickets_TicketStatuses_TicketStatusId",
                schema: "Business",
                table: "Tickets",
                column: "TicketStatusId",
                principalSchema: "Business",
                principalTable: "TicketStatuses",
                principalColumn: "Id");
        }
    }
}
