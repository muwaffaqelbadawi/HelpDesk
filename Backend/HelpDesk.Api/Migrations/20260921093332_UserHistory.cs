using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace HelpDesk.Migrations
{
    /// <inheritdoc />
    public partial class UserHistory : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_UserSession_UserSession_DeletedById",
                schema: "Auth",
                table: "UserSession");

            migrationBuilder.DropForeignKey(
                name: "FK_UserSession_Users_UserId",
                schema: "Auth",
                table: "UserSession");

            migrationBuilder.DropPrimaryKey(
                name: "PK_UserSession",
                schema: "Auth",
                table: "UserSession");

            migrationBuilder.RenameTable(
                name: "UserSession",
                schema: "Auth",
                newName: "UserSessions",
                newSchema: "Auth");

            migrationBuilder.RenameIndex(
                name: "IX_UserSession_UserId",
                schema: "Auth",
                table: "UserSessions",
                newName: "IX_UserSessions_UserId");

            migrationBuilder.RenameIndex(
                name: "IX_UserSession_DeletedById",
                schema: "Auth",
                table: "UserSessions",
                newName: "IX_UserSessions_DeletedById");

            migrationBuilder.AlterColumn<DateTimeOffset>(
                name: "CreatedAt",
                schema: "Auth",
                table: "Users",
                type: "datetimeoffset",
                nullable: false,
                oldClrType: typeof(DateTimeOffset),
                oldType: "datetimeoffset",
                oldDefaultValueSql: "SYSUTCDATETIME()");

            migrationBuilder.AlterColumn<DateTimeOffset>(
                name: "CreatedAt",
                schema: "Business",
                table: "Tickets",
                type: "datetimeoffset",
                nullable: false,
                oldClrType: typeof(DateTimeOffset),
                oldType: "datetimeoffset",
                oldDefaultValueSql: "SYSUTCDATETIME()");

            migrationBuilder.AlterColumn<DateTimeOffset>(
                name: "OccurredAt",
                schema: "Business",
                table: "TicketHistory",
                type: "datetimeoffset",
                nullable: false,
                oldClrType: typeof(DateTimeOffset),
                oldType: "datetimeoffset",
                oldDefaultValueSql: "SYSUTCDATETIME()");

            migrationBuilder.AlterColumn<DateTimeOffset>(
                name: "CreatedAt",
                schema: "Business",
                table: "Employees",
                type: "datetimeoffset",
                nullable: false,
                oldClrType: typeof(DateTimeOffset),
                oldType: "datetimeoffset",
                oldDefaultValueSql: "SYSUTCDATETIME()");

            migrationBuilder.AddPrimaryKey(
                name: "PK_UserSessions",
                schema: "Auth",
                table: "UserSessions",
                column: "Id");

            migrationBuilder.CreateTable(
                name: "UserHistories",
                schema: "Auth",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    UserId = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    Type = table.Column<int>(type: "int", nullable: false),
                    OccurredAt = table.Column<DateTimeOffset>(type: "datetimeoffset", nullable: false),
                    Description = table.Column<string>(type: "nvarchar(200)", maxLength: 200, nullable: true),
                    DeletedById = table.Column<Guid>(type: "uniqueidentifier", nullable: true),
                    DeletedAt = table.Column<DateTimeOffset>(type: "datetimeoffset", nullable: true),
                    IsDeleted = table.Column<bool>(type: "bit", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_UserHistories", x => x.Id);
                    table.ForeignKey(
                        name: "FK_UserHistories_Users_DeletedById",
                        column: x => x.DeletedById,
                        principalSchema: "Auth",
                        principalTable: "Users",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_UserHistories_Users_UserId",
                        column: x => x.UserId,
                        principalSchema: "Auth",
                        principalTable: "Users",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_UserHistories_DeletedById",
                schema: "Auth",
                table: "UserHistories",
                column: "DeletedById");

            migrationBuilder.CreateIndex(
                name: "IX_UserHistories_UserId",
                schema: "Auth",
                table: "UserHistories",
                column: "UserId");

            migrationBuilder.AddForeignKey(
                name: "FK_UserSessions_UserSessions_DeletedById",
                schema: "Auth",
                table: "UserSessions",
                column: "DeletedById",
                principalSchema: "Auth",
                principalTable: "UserSessions",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_UserSessions_Users_UserId",
                schema: "Auth",
                table: "UserSessions",
                column: "UserId",
                principalSchema: "Auth",
                principalTable: "Users",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_UserSessions_UserSessions_DeletedById",
                schema: "Auth",
                table: "UserSessions");

            migrationBuilder.DropForeignKey(
                name: "FK_UserSessions_Users_UserId",
                schema: "Auth",
                table: "UserSessions");

            migrationBuilder.DropTable(
                name: "UserHistories",
                schema: "Auth");

            migrationBuilder.DropPrimaryKey(
                name: "PK_UserSessions",
                schema: "Auth",
                table: "UserSessions");

            migrationBuilder.RenameTable(
                name: "UserSessions",
                schema: "Auth",
                newName: "UserSession",
                newSchema: "Auth");

            migrationBuilder.RenameIndex(
                name: "IX_UserSessions_UserId",
                schema: "Auth",
                table: "UserSession",
                newName: "IX_UserSession_UserId");

            migrationBuilder.RenameIndex(
                name: "IX_UserSessions_DeletedById",
                schema: "Auth",
                table: "UserSession",
                newName: "IX_UserSession_DeletedById");

            migrationBuilder.AlterColumn<DateTimeOffset>(
                name: "CreatedAt",
                schema: "Auth",
                table: "Users",
                type: "datetimeoffset",
                nullable: false,
                defaultValueSql: "SYSUTCDATETIME()",
                oldClrType: typeof(DateTimeOffset),
                oldType: "datetimeoffset");

            migrationBuilder.AlterColumn<DateTimeOffset>(
                name: "CreatedAt",
                schema: "Business",
                table: "Tickets",
                type: "datetimeoffset",
                nullable: false,
                defaultValueSql: "SYSUTCDATETIME()",
                oldClrType: typeof(DateTimeOffset),
                oldType: "datetimeoffset");

            migrationBuilder.AlterColumn<DateTimeOffset>(
                name: "OccurredAt",
                schema: "Business",
                table: "TicketHistory",
                type: "datetimeoffset",
                nullable: false,
                defaultValueSql: "SYSUTCDATETIME()",
                oldClrType: typeof(DateTimeOffset),
                oldType: "datetimeoffset");

            migrationBuilder.AlterColumn<DateTimeOffset>(
                name: "CreatedAt",
                schema: "Business",
                table: "Employees",
                type: "datetimeoffset",
                nullable: false,
                defaultValueSql: "SYSUTCDATETIME()",
                oldClrType: typeof(DateTimeOffset),
                oldType: "datetimeoffset");

            migrationBuilder.AddPrimaryKey(
                name: "PK_UserSession",
                schema: "Auth",
                table: "UserSession",
                column: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_UserSession_UserSession_DeletedById",
                schema: "Auth",
                table: "UserSession",
                column: "DeletedById",
                principalSchema: "Auth",
                principalTable: "UserSession",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_UserSession_Users_UserId",
                schema: "Auth",
                table: "UserSession",
                column: "UserId",
                principalSchema: "Auth",
                principalTable: "Users",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
