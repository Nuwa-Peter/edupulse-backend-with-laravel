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
    Schema::create('students', function (Blueprint $table) {
        $table->id();
        $table->foreignId('school_id')->constrained()->onDelete('cascade');
        $table->foreignId('class_id')->constrained()->onDelete('cascade');
        $table->string('lin')->unique()->nullable(); // National ID
        $table->string('edupulse_id')->unique();
        $table->string('name');
        $table->string('photo_path')->nullable();
        $table->date('dob');
        $table->enum('gender', ['male', 'female']);
        $table->string('parent_phone')->nullable();
        $table->string('parent_email')->nullable();
        $table->timestamps();
    });
}

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('students');
    }
};
