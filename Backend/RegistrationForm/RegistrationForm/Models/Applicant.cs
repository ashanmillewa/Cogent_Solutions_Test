namespace RegistrationForm.Models
{
    public class Applicant
    {
        public int Id { get; set; }
        public string? FirstName { get; set; }
        public string? LastName { get; set; }
        public string? JobTitle { get; set; }
        public string? CompanyName {get; set; }
        public string? MobileNumber { get; set; }
        public string? Email { get; set; }
        public string? WebUrl { get; set; }
    }
}
