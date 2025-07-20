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
    Schema::create('grading_scales', function (Blueprint $table) {
        $table->id();
        $table->foreignId('school_id')->constrained()->onDelete('cascade');
        $table->string('school_level');
        $table->string('grade_letter', 10);
        $table->unsignedTinyInteger('min_score');
        $table->unsignedTinyInteger('max_score');
        $table->string('description')->nullable();
        $table->timestamps();
    });
}

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('grading_scales');
    }
};
