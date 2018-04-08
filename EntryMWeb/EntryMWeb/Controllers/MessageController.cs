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
    public class MessageController : ApiController
    {
        [HttpGet]
        [ActionName("GetMessagesFromBuildingToCompany")]
        public List<MessageToCompanyModel> GetMessagesFromBuildingToCompany(int CompanyId)
        {
            List<MessageToCompanyModel> result = new List<MessageToCompanyModel>();
            try
            {
                result = MessageDAL.GetMessagesFromBuildingToCompany(CompanyId);
            }
            catch (Exception e)
            {

            }
            return result;
        }

        [HttpPost]
        public void AddNewMessage(MessageFromCompanyModel messageModel)
        {
            
            try
            {
                MessageDAL.AddNewMessage(messageModel);
            }
            catch(Exception e)
            {

            }
         
        }

        

    }
}
