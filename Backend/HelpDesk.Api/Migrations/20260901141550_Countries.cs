using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace HelpDesk.Migrations
{
    /// <inheritdoc />
    public partial class Countries : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Countries",
                schema: "Business",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    M49Code = table.Column<string>(type: "nvarchar(3)", maxLength: 3, nullable: false),
                    Alpha2Code = table.Column<string>(type: "nvarchar(2)", maxLength: 2, nullable: false),
                    Alpha3Code = table.Column<string>(type: "nvarchar(3)", maxLength: 3, nullable: false),
                    Name = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: false),
                    NameArabic = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: false),
                    IsActive = table.Column<bool>(type: "bit", nullable: false, defaultValue: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Countries", x => x.Id);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Countries_Alpha2Code",
                schema: "Business",
                table: "Countries",
                column: "Alpha2Code",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_Countries_Alpha3Code",
                schema: "Business",
                table: "Countries",
                column: "Alpha3Code",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_Countries_M49Code",
                schema: "Business",
                table: "Countries",
                column: "M49Code",
                unique: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Countries",
                schema: "Business");
        }
    }
}
