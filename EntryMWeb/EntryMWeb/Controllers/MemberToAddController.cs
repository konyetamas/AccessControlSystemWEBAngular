using EntryMWeb.DAL;
using EntryMWeb.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace EntryMWeb.Controllers
{
    public class MemberToAddController : ApiController
    {
        [HttpPost]
        [ActionName("AddNewMember")]
        public void AddNewMember(MemberModel model)
        {
            try
            {
                MemberDAL.AddNewMember(model);
            }
            catch (Exception e)
            {

            }
        }
    }
}
