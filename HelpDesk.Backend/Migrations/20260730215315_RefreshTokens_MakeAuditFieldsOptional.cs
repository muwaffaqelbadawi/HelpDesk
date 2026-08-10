using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace HelpDesk.Migrations
{
    /// <inheritdoc />
    public partial class RefreshTokens_MakeAuditFieldsOptional : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<string>(
                name: "UserAgent",
                schema: "Auth",
                table: "RefreshTokens",
                type: "nvarchar(500)",
                maxLength: 500,
                nullable: true,
                oldClrType: typeof(string),
                oldType: "nvarchar(500)",
                oldMaxLength: 500);

            migrationBuilder.AlterColumn<string>(
                name: "RevokedByIp",
                schema: "Auth",
                table: "RefreshTokens",
                type: "nvarchar(200)",
                maxLength: 200,
                nullable: true,
                oldClrType: typeof(string),
                oldType: "nvarchar(200)",
                oldMaxLength: 200);

            migrationBuilder.AlterColumn<DateTimeOffset>(
                name: "ExpiresAt",
                schema: "Auth",
                table: "RefreshTokens",
                type: "datetimeoffset(3)",
                precision: 3,
                nullable: true,
                oldClrType: typeof(DateTimeOffset),
                oldType: "datetimeoffset(3)",
                oldPrecision: 3);

            migrationBuilder.AlterColumn<string>(
                name: "CreatedByIp",
                schema: "Auth",
                table: "RefreshTokens",
                type: "nvarchar(max)",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "nvarchar(200)",
                oldMaxLength: 200);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<string>(
                name: "UserAgent",
                schema: "Auth",
                table: "RefreshTokens",
                type: "nvarchar(500)",
                maxLength: 500,
                nullable: false,
                defaultValue: "",
                oldClrType: typeof(string),
                oldType: "nvarchar(500)",
                oldMaxLength: 500,
                oldNullable: true);

            migrationBuilder.AlterColumn<string>(
                name: "RevokedByIp",
                schema: "Auth",
                table: "RefreshTokens",
                type: "nvarchar(200)",
                maxLength: 200,
                nullable: false,
                defaultValue: "",
                oldClrType: typeof(string),
                oldType: "nvarchar(200)",
                oldMaxLength: 200,
                oldNullable: true);

            migrationBuilder.AlterColumn<DateTimeOffset>(
                name: "ExpiresAt",
                schema: "Auth",
                table: "RefreshTokens",
                type: "datetimeoffset(3)",
                precision: 3,
                nullable: false,
                defaultValue: new DateTimeOffset(new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), new TimeSpan(0, 0, 0, 0, 0)),
                oldClrType: typeof(DateTimeOffset),
                oldType: "datetimeoffset(3)",
                oldPrecision: 3,
                oldNullable: true);

            migrationBuilder.AlterColumn<string>(
                name: "CreatedByIp",
                schema: "Auth",
                table: "RefreshTokens",
                type: "nvarchar(200)",
                maxLength: 200,
                nullable: false,
                defaultValue: "",
                oldClrType: typeof(string),
                oldType: "nvarchar(max)",
                oldNullable: true);
        }
    }
}
