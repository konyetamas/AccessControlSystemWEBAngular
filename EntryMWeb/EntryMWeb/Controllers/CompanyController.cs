using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using EntryMWeb.DB;
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
                result = CompanyDAL.GetCompanies();
            }
            catch(Exception e)
            {

            }
            return result;
        }

        [HttpGet]
        public CompanyModel GetCompanyById(int CompanyId)
        {          
            try
            {
              return  CompanyDAL.GetCompanyById(CompanyId);
            }
            catch (Exception e)
            {

            }
            return null;
        }


        [HttpPost]
        public void EditCompany(CompanyModel company)
        {
            try
            {
                CompanyDAL.EditCompany(company);
            }
            catch (Exception e)
            {

            }
        }

    }
}
