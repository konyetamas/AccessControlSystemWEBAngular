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
    public class EntryController : ApiController
    {

        [HttpGet]
        public List<EntryModel> GetEntries(int CompanyId)
        {
            List<EntryModel> result = new List<EntryModel>();
            try
            {
                result = EntryDAL.GetEntriesByCompanyId(CompanyId);
            }
            catch (Exception e)
            {

            }
            return result;
        }

    }
}
