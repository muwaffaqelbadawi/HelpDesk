using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace HelpDesk.Migrations
{
    /// <inheritdoc />
    public partial class User_PreferredLanguage : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<Guid>(
                name: "PreferredLanguageId",
                schema: "Auth",
                table: "Users",
                type: "uniqueidentifier",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Users_PreferredLanguageId",
                schema: "Auth",
                table: "Users",
                column: "PreferredLanguageId");

            migrationBuilder.AddForeignKey(
                name: "FK_Users_Languages_PreferredLanguageId",
                schema: "Auth",
                table: "Users",
                column: "PreferredLanguageId",
                principalSchema: "Business",
                principalTable: "Languages",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Users_Languages_PreferredLanguageId",
                schema: "Auth",
                table: "Users");

            migrationBuilder.DropIndex(
                name: "IX_Users_PreferredLanguageId",
                schema: "Auth",
                table: "Users");

            migrationBuilder.DropColumn(
                name: "PreferredLanguageId",
                schema: "Auth",
                table: "Users");
        }
    }
}
