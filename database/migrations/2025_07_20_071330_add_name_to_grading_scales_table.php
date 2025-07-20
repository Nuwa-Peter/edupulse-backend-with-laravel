<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
{
    Schema::table('grading_scales', function (Blueprint $table) {
        $table->string('name')->after('school_id'); // Add a name for the scale
    });
}

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('grading_scales', function (Blueprint $table) {
            //
        });
    }
};
