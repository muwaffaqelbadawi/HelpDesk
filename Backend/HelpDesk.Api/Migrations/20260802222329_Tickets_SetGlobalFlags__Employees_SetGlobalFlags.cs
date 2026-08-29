using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace HelpDesk.Migrations
{
    /// <inheritdoc />
    public partial class Tickets_SetGlobalFlags__Employees_SetGlobalFlags : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "TicketNumber",
                schema: "Business",
                table: "Tickets");

            migrationBuilder.RenameColumn(
                name: "EmployeeNumber",
                schema: "Business",
                table: "Employees",
                newName: "Number");

            migrationBuilder.RenameIndex(
                name: "IX_Employees_EmployeeNumber",
                schema: "Business",
                table: "Employees",
                newName: "IX_Employees_Number");

            migrationBuilder.AlterColumn<bool>(
                name: "IsDeleted",
                schema: "Auth",
                table: "Users",
                type: "bit",
                nullable: false,
                defaultValue: false,
                oldClrType: typeof(bool),
                oldType: "bit");

            migrationBuilder.AlterColumn<bool>(
                name: "IsDeleted",
                schema: "Business",
                table: "Tickets",
                type: "bit",
                nullable: false,
                defaultValue: false,
                oldClrType: typeof(bool),
                oldType: "bit");

            migrationBuilder.AddColumn<string>(
                name: "Number",
                schema: "Business",
                table: "Tickets",
                type: "nvarchar(100)",
                maxLength: 100,
                nullable: false,
                defaultValue: "");

            migrationBuilder.AlterColumn<bool>(
                name: "IsDeleted",
                schema: "Business",
                table: "Employees",
                type: "bit",
                nullable: false,
                defaultValue: false,
                oldClrType: typeof(bool),
                oldType: "bit");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Number",
                schema: "Business",
                table: "Tickets");

            migrationBuilder.RenameColumn(
                name: "Number",
                schema: "Business",
                table: "Employees",
                newName: "EmployeeNumber");

            migrationBuilder.RenameIndex(
                name: "IX_Employees_Number",
                schema: "Business",
                table: "Employees",
                newName: "IX_Employees_EmployeeNumber");

            migrationBuilder.AlterColumn<bool>(
                name: "IsDeleted",
                schema: "Auth",
                table: "Users",
                type: "bit",
                nullable: false,
                oldClrType: typeof(bool),
                oldType: "bit",
                oldDefaultValue: false);

            migrationBuilder.AlterColumn<bool>(
                name: "IsDeleted",
                schema: "Business",
                table: "Tickets",
                type: "bit",
                nullable: false,
                oldClrType: typeof(bool),
                oldType: "bit",
                oldDefaultValue: false);

            migrationBuilder.AddColumn<long>(
                name: "TicketNumber",
                schema: "Business",
                table: "Tickets",
                type: "bigint",
                nullable: false,
                defaultValueSql: "NEXT VALUE FOR [Business].[TicketNumber]");

            migrationBuilder.AlterColumn<bool>(
                name: "IsDeleted",
                schema: "Business",
                table: "Employees",
                type: "bit",
                nullable: false,
                oldClrType: typeof(bool),
                oldType: "bit",
                oldDefaultValue: false);
        }
    }
}
