using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using RegistrationForm.Models;

namespace RegistrationForm.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ApplicantController : ControllerBase
    {
        private readonly ApplicationDbContext dbContext;
        public ApplicantController( ApplicationDbContext dbContext)
        {
            this.dbContext = dbContext;
        }

        [Route("api/GetAllApplicants")]
        [HttpGet]
        public IActionResult GetAllApplicants()
        {
            var allApplicants = dbContext.Applicants.ToList();
            return Ok(allApplicants);
        }

        [Route("api/AddApplicants")]
        [HttpPost]
        public IActionResult AddApplicants(Applicant addapplicants)
        {
            var applicant = new Applicant()
            {
                FirstName = addapplicants.FirstName,
                LastName = addapplicants.LastName,
                JobTitle = addapplicants.JobTitle,
                CompanyName = addapplicants.CompanyName,
                MobileNumber = addapplicants.MobileNumber,
                Email = addapplicants.Email,
                WebUrl = addapplicants.WebUrl,
            };

            dbContext.Applicants.Add(applicant);
            dbContext.SaveChanges();
            return Ok(applicant);
        }
    }
}
