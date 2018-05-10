using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using DataBase;
using EntryMWeb.Model;
using EntryMWeb.DAL;

namespace EntryMWeb.Controllers
{
    public class CompanyController : ApiController
    {
        [HttpGet]
        public List<CompanyModel> GetCompanies()
        {
            List<CompanyModel> result = new List<CompanyModel>();
            try
            {
                CompanyDAL companyDAL = new CompanyDAL();
                result = companyDAL.GetCompanies();
            }
            catch(Exception e)
            {
                throw new Exception(e.Message);
            }
            return result;
        }

        [HttpGet]
        public CompanyModel GetCompanyById(int CompanyId)
        {          
            try
            {
                CompanyDAL companyDAL = new CompanyDAL();
                return companyDAL.GetCompanyById(CompanyId);
            }
            catch (Exception e)
            {
                throw new Exception(e.Message);
            }
            return null;
        }


        [HttpPost]
        public void EditCompany(CompanyModel company)
        {
            try
            {
                CompanyDAL companyDAL = new CompanyDAL();
                companyDAL.EditCompany(company);
            }
            catch (Exception e)
            {
                throw new Exception(e.Message);
            }
        }

    }
}
