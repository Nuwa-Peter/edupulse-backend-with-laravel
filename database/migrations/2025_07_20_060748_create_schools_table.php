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
    Schema::create('schools', function (Blueprint $table) {
        $table->id();
        $table->string('school_id')->unique();
        $table->string('name');
        $table->string('logo_path')->nullable();
        $table->string('email')->unique();
        $table->string('phone');
        $table->text('address');
        $table->enum('school_type', ['day', 'boarding', 'both']);
        $table->enum('school_level', ['nursery', 'primary', 'secondary']);
        $table->string('payment_status')->default('pending');
        $table->string('payment_transaction_id')->nullable();
        $table->timestamps();
    });
}

};

