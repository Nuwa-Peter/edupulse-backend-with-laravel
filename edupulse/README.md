# EduPulse School Management System

## Objective
Develop **EduPulse**, a comprehensive school management system that enables schools to register, manage student data, generate report cards and ID cards with QR codes, facilitate communication via bulk SMS, and integrate payment gateways. The system supports multiple user roles, customizable report card remarks and grading scales, and secure data storage. It includes a modern interface with sidebar navigation, high-quality icons, and comprehensive activity logging viewable by the headteacher on a "View Logs" page, with notifications sent to the headteacher. All timestamps use the **Africa/Kampala** timezone. The system starts as an offline-first solution, later deployed online to a web server, with Android and iOS apps built subsequently using React Native. A modern logo for EduPulse is also required.

## Technology Stack
- **Backend**: Laravel (latest stable version, e.g., Laravel 11.x) for robust MVC framework, ORM (Eloquent), and built-in security features.
- **Frontend**: React Native for web (using `react-native-web`) for a unified codebase, with Tailwind CSS for modern styling and responsive design.
- **Mobile Apps**: React Native for Android and iOS apps (developed later using the same codebase).
- **PDF Generation**:
  - Primary: TCPDF (integrated with Laravel for performance).
  - Alternative: Dompdf (simpler HTML-to-PDF conversion).
- **Excel Handling**: PhpOffice/PhpSpreadsheet (via Laravel package for student data import/export).
- **Database**: MySQL or MariaDB (managed via Laravel Eloquent ORM).
- **Payment Integration**: Airtel Money and MTN Mobile Money APIs (linked to your phone number).
- **SMS Integration**: Third-party SMS gateway (e.g., Africa's Talking, Twilio, or local provider).
- **QR Code Generation**: PHP QR Code library (e.g., `phpqrcode`) or Laravel-compatible package.
- **File Uploads**: Laravel Filesystem for handling student photos and school logos.
- **Authentication**: Laravel Breeze or Jetstream for secure authentication, role-based access, and password resets.
- **Security**: Laravel’s built-in CSRF protection, input validation, SQL injection prevention, and XSS prevention.
- **Email Notifications**: Laravel Mail (with PHPMailer or SMTP) for sending emails.
- **Icons**: Font Awesome 6, Heroicons, or Material Icons for high-quality visuals.
- **Timezone**: Set to **Africa/Kampala** for all timestamps (configured in Laravel’s `config/app.php` with `date_default_timezone_set('Africa/Kampala')`).
- **Offline-First**: Use Laravel with SQLite for offline development, with Service Workers and IndexedDB in React Native for offline web functionality.
- **Deployment**: Deploy to a web server (e.g., Apache/Nginx on AWS, DigitalOcean, or local hosting) after offline development.
- **Mobile Deployment**: Build Android and iOS apps using React Native for later release on Google Play Store and Apple App Store.

## Phased Implementation Plan

This plan breaks down the development process into manageable sprints, focusing on delivering a minimum viable product (MVP) first and then iterating on it.

### Sprint 1: Core Backend and School Registration (MVP)

*   **User Story:** As a school administrator, I want to register my school on the EduPulse platform so that I can start using the system.
*   **Tasks:**
    *   Set up a new Laravel project.
    *   Configure the database (MySQL/MariaDB).
    *   Implement the `schools` and `users` table migrations and models.
    *   Create the school registration form (backend validation only for now).
    *   Implement the logic for generating a unique `EduPulse School ID`.
    *   Set up Laravel Breeze/Jetstream for basic authentication.
    *   Create the "Super Admin" role and a seeder to create the first super admin user.
    *   Create a seeder for the "Demo School."
*   **API Endpoints:**
    *   `POST /api/register/school`: Creates a new school.
    *   `POST /api/login`: Authenticates a user.
    *   `POST /api/logout`: Logs out a user.
*   **Goal:** A functional backend that can register a school and create a headteacher account.

### Sprint 2: Frontend Setup and School Registration UI

*   **User Story:** As a school administrator, I want to see a user-friendly registration form in my browser so that I can easily sign up my school.
*   **Tasks:**
    *   Set up a new React Native for Web project.
    *   Integrate Tailwind CSS for styling.
    *   Create the school registration form component.
    *   Connect the form to the `/api/register/school` endpoint.
    *   Implement basic routing for login and registration pages.
    *   Design a simple dashboard layout with sidebar navigation.
*   **Goal:** A user can visit the website, register their school, and be redirected to a basic dashboard.

### Sprint 3: Student Management (Core Functionality)

*   **User Story:** As a headteacher, I want to add and manage students in my school so that I can keep their records organized.
*   **Tasks:**
    *   Implement the `students` and `classes` table migrations and models.
    *   Create API endpoints for adding, viewing, updating, and deleting students and classes.
    *   Create the "Add Student" form (manual entry) on the frontend.
    *   Create a "Students" page to list all students in a table.
    *   Implement search and filter functionality for students.
*   **API Endpoints:**
    *   `GET /api/students`: Get a list of all students.
    *   `POST /api/students`: Add a new student.
    *   `GET /api/students/{id}`: Get details of a specific student.
    *   `PUT /api/students/{id}`: Update a student's details.
    *   `DELETE /api/students/{id}`: Delete a student.
    *   `POST /api/students/import`: Bulk import students from Excel.
*   **Goal:** A headteacher can log in and manage the students in their school.

### Sprint 4: Report Card Generation (Core Functionality)

*   **User Story:** As a teacher, I want to enter marks for my students, and as a headteacher, I want to generate report cards.
*   **Tasks:**
    *   Implement the `marks`, `grading_scales`, and `remarks_templates` table migrations and models.
    *   Create API endpoints for managing marks, grading scales, and remarks.
    *   Create the UI for teachers to enter marks.
    *   Implement the PDF generation logic using TCPDF/Dompdf on the backend.
    *   Create a "Generate Report Card" button on the student profile page.
*   **API Endpoints:**
    *   `POST /api/marks`: Add marks for a student.
    *   `GET /api/report-cards/{studentId}`: Generate and download a report card.
*   **Goal:** A headteacher can generate a PDF report card for a student.

## Functional Requirements

### 1. School Registration
- Schools register via a form:
  - School name, logo (image upload, max 2MB), email, phone, address.
  - **School Type**: Day schooling, boarding, or both (dropdown).
  - **School Level**: Nursery, Primary, or Secondary (dropdown, affects complexity like grading scales).
  - Payment via Airtel Money or MTN Mobile Money (linked to your phone number).
- Generate unique **EduPulse School ID** (e.g., EDP000001).
- Store payment details (transaction ID, amount, status, timestamp in Africa/Kampala) in `payments` table.
- Grant access after payment verification.
- Send confirmation email and SMS.
- Log registration in audit log.
- **Offline Support**: Store registration data locally in SQLite, sync to MySQL when online.
- **Super Admin**: Can delete schools, edit all school data, and manage a demo school (pre-registered).

### 2. User Roles and Access Control
- **Super Admin Account**:
  - Full control over all schools.
  - Can delete schools, edit all data, change passwords for any user.
  - Manages demo school for testing.
- **Headteacher Account**:
  - Full school-level admin privileges.
  - Creates/edits/deletes teacher accounts.
  - Assigns classes, manages report cards/ID cards, configures grading scales/remarks.
  - Views all logs on "View Logs" page and receives notifications.
- **Teacher Account**:
  - Enters/edits marks and attendance for assigned classes.
  - Views report cards for assigned classes.
  - Sends SMS to parents (with headteacher approval).
- **Authentication**:
  - Automatic username generation:
    - Students: Based on EduPulse ID (e.g., EDPF00001 for female, EDPM00001 for male).
    - Teachers: Based on name/email (e.g., `jdoe_teacher`).
    - Parents: Based on student’s EduPulse ID (e.g., `parent_EDPF00001`).
  - Default password set by headteacher, editable later by users.
  - Secure login via Laravel Breeze/Jetstream (bcrypt hashing).
  - Role-based access control using Laravel middleware.
  - Password reset via email with one-time token.
  - Log authentication events (Africa/Kampala timezone).
- **Offline Support**: Cache user sessions locally, sync authentication logs when online.

### 3. Student Management
- **EduPulse ID**:
  - Female students: EDPF00001 (incremental).
  - Male students: EDPM00001 (incremental).
  - Generated automatically on student addition.
- **Add Students**:
  - Manual: Form with LIN, name, class, photo (max 2MB), DOB, gender, parent_phone, parent_email.
  - Bulk: Excel import via PhpSpreadsheet (template: LIN, name, class, DOB, gender, parent_phone, parent_email).
  - Validate duplicates (LIN/EduPulse ID) and missing fields.
- **Student Classification**:
  - Organize by class (e.g., Grade 1, Form 2) and school level (Nursery, Primary, Secondary).
  - Headteachers create/manage classes.
  - Filter/search by class, LIN, EduPulse ID, or name.
- **Student Profiles**:
  - Display details (photo, class, academic history, EduPulse ID).
  - Headteachers update/archive records.
  - Log updates/archives in audit log.
- **Offline Support**: Store student data in SQLite, sync to MySQL when online.

### 4. Report Card Generation
- Generate report cards using TCPDF (or Dompdf) with:
  - School name, logo, student details (EduPulse ID, LIN, name, class).
  - Subject marks (entered by teachers, approved by headteacher).
  - Grades based on headteacher-defined scale.
  - Remarks (predefined or custom, approved by headteacher).
  - Optional digital signature/stamp.
- **Grading Scale Configuration**:
  - Headteacher defines via form (e.g., A: 80-100, B: 70-79).
  - Store in `grading_scales` table, support multiple scales by school level.
  - Log updates in audit log.
- **Remarks Configuration**:
  - Headteacher sets predefined remarks (e.g., “Excellent,” “Needs improvement”).
  - Store in `remarks_templates` table.
  - Teachers select or enter custom remarks (approved by headteacher).
  - Log updates in audit log.
- **Features**:
  - Preview in modal/full-screen (React Native component).
  - Download PDFs (single/bulk per class).
  - Store PDFs in Laravel Filesystem, metadata in `report_cards` table (Africa/Kampala).
  - Customize templates (motto, fonts, layouts).
  - Log generation in audit log.
- **Offline Support**: Generate/store PDFs locally, sync metadata when online.

### 5. Student ID Card Generation
- Generate ID cards using TCPDF (or Dompdf) with:
  - School name, logo, student details (EduPulse ID, LIN, name, class), photo.
  - QR code linking to `https://edupulse.com/student/{EduPulseID}` (secure, read-only).
- **Features**:
  - Download PDFs (single/bulk).
  - Store in Filesystem, metadata in `id_cards` table (Africa/Kampala).
  - Log generation in audit log.
- **Offline Support**: Generate/store IDs locally, sync metadata when online.

### 6. Communication Features
- **Bulk SMS**:
  - Headteachers send SMS to parents/teachers (e.g., report card availability).
  - Teachers send SMS to assigned class parents (approved by headteacher).
  - Use Africa’s Talking/Twilio/local SMS gateway.
  - Compose via form (160-character limit, predefined templates).
  - Log SMS (recipient, content, timestamp in Africa/Kampala, status) in audit log.
- **Email Notifications**:
  - Automated emails for registration, teacher account creation, password resets, report card availability.
  - Use Laravel Mail with SMTP.
  - Log emails in audit log (Africa/Kampala).
- **In-App Notifications**:
  - Notify teachers of assignments/approvals.
  - Notify headteachers of all activities.
  - Display in React Native toast/sidebar.
  - Log notifications in audit log.
- **Offline Support**: Queue SMS/emails locally, send when online.

### 7. Activity Logging and View Logs Page
- **Activity Logging**:
  - Log all actions in `audit_logs` table (user_id, school_id, action, details, timestamp in Africa/Kampala).
  - Examples: school registration, login/logout, student addition, marks entry, SMS/email sent.
  - Logs are immutable.
- **Headteacher Notifications**:
  - In-app and email notifications for all activities.
  - Include action, user, timestamp (Africa/Kampala).
- **View Logs Page**:
  - Headteacher-only page with filterable, searchable, sortable table (Timestamp, User, Action, Details).
  - Export as CSV/PDF (TCPDF).
  - Modern React Native UI with pagination.
  - Log page access in audit log.
- **Offline Support**: Store logs in SQLite, sync to MySQL when online.

### 8. Payment Integration
- Integrate Airtel Money/MTN Mobile Money APIs for registration.
- Store transaction details (transaction ID, amount, status, timestamp in Africa/Kampala).
- Display status in React Native UI (progress bar, badge).
- Allow retry for failed payments.
- Send SMS/email confirmations.
- Log payments in audit log.
- **Offline Support**: Queue payments locally, process when online.

### 9. Database Design
- **Tables**:
  - `schools`: school_id (PK, EDP000001), name, logo_path, email, phone, address, school_type (day/boarding/both), school_level (Nursery/Primary/Secondary), payment_status, payment_transaction_id, created_at (Africa/Kampala).
  - `users`: user_id (PK), school_id (FK), role (super_admin/headteacher/teacher), username (auto-generated), email, password_hash, created_at (Africa/Kampala).
  - `classes`: class_id (PK), school_id (FK), class_name, school_level.
  - `students`: student_id (PK), school_id (FK), class_id (FK), LIN, edupulse_id (EDPF/EDPM), name, photo_path, dob, gender, parent_phone, parent_email.
  - `marks`: mark_id (PK), student_id (FK), class_id (FK), subject, mark, remarks, entered_by (user_id, FK), created_at (Africa/Kampala).
  - `report_cards`: report_id (PK), student_id (FK), pdf_path, generated_at (Africa/Kampala).
  - `id_cards`: id_card_id (PK), student_id (FK), pdf_path, qr_code_url, generated_at (Africa/Kampala).
  - `grading_scales`: scale_id (PK), school_id (FK), school_level, grade_letter, min_score, max_score, description.
  - `remarks_templates`: remark_id (PK), school_id (FK), remark_text.
  - `audit_logs`: log_id (PK), user_id (FK), school_id (FK), action, details (JSON), timestamp (Africa/Kampala).
  - `sms_logs`: sms_id (PK), recipient, content, status, timestamp (Africa/Kampala).
  - `email_logs`: email_id (PK), recipient, subject, body, status, timestamp (Africa/Kampala).
  - `payments`: payment_id (PK), school_id (FK), transaction_id, amount, status, timestamp (Africa/Kampala).

### 10. Development and Deployment Plan
- **Phase 1: Offline Development**:
  - Use Laravel with SQLite for backend and React Native for web frontend.
  - Implement Service Workers and IndexedDB for offline functionality (caching data, queuing SMS/emails/payments).
  - Test locally on a single machine (e.g., laptop with XAMPP).
- **Phase 2: Online Deployment**:
  - Deploy Laravel backend to a web server (e.g., AWS, DigitalOcean, or local hosting with Apache/Nginx).
  - Use MySQL for production database.
  - Sync offline data (SQLite) to MySQL.
  - Deploy React Native web app using `react-native-web`.
  - Ensure HTTPS for security.
- **Phase 3: Mobile Apps**:
  - Build Android and iOS apps using React Native (reuse web codebase).
  - Implement offline support with AsyncStorage and queued syncing.
  - Publish to Google Play Store and Apple App Store.
- **Logo Design**:
  - Create a modern logo for EduPulse (e.g., stylized book or graduation cap with vibrant colors).
  - Store as SVG/PNG, integrate into web/app UI and PDFs.

### 11. Additional Notes
- **Super Admin Demo School**: Pre-register a demo school (e.g., EDP000000) for super admin to test all features.
- **Security**: Use Laravel’s built-in security (CSRF tokens, validation, middleware) and HTTPS for online deployment.
- **Scalability**: Design database with indexes on LIN, EduPulse ID, and school_id for performance.
- **Compliance**: Ensure payment and data handling comply with local regulations (e.g., Uganda’s data protection laws).
