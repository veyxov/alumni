using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Alumni.Migrations
{
    /// <inheritdoc />
    public partial class rsnd : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Universities",
                columns: table =>
                    new
                    {
                        Id = table
                            .Column<int>(type: "INTEGER", nullable: false)
                            .Annotation("Sqlite:Autoincrement", true),
                        Name = table.Column<string>(type: "TEXT", nullable: false)
                    },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Universities", x => x.Id);
                }
            );

            migrationBuilder.CreateTable(
                name: "EducationInfos",
                columns: table =>
                    new
                    {
                        Id = table
                            .Column<int>(type: "INTEGER", nullable: false)
                            .Annotation("Sqlite:Autoincrement", true),
                        UserId = table.Column<int>(type: "INTEGER", nullable: false),
                        UniversityId = table.Column<int>(type: "INTEGER", nullable: false)
                    },
                constraints: table =>
                {
                    table.PrimaryKey("PK_EducationInfos", x => x.Id);
                    table.ForeignKey(
                        name: "FK_EducationInfos_Universities_UniversityId",
                        column: x => x.UniversityId,
                        principalTable: "Universities",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade
                    );
                    table.ForeignKey(
                        name: "FK_EducationInfos_Users_UserId",
                        column: x => x.UserId,
                        principalTable: "Users",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade
                    );
                }
            );

            migrationBuilder.CreateIndex(
                name: "IX_EducationInfos_UniversityId",
                table: "EducationInfos",
                column: "UniversityId"
            );

            migrationBuilder.CreateIndex(
                name: "IX_EducationInfos_UserId",
                table: "EducationInfos",
                column: "UserId"
            );
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(name: "EducationInfos");

            migrationBuilder.DropTable(name: "Universities");
        }
    }
}
