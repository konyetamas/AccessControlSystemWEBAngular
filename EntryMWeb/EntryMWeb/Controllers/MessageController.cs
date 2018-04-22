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
    public class MessageController : ApiController
    {
        [HttpGet]
        [ActionName("GetMessagesFromBuildingToCompany")]
        public List<MessageToCompanyModel> GetMessagesFromBuildingToCompany(int CompId)
        {
            List<MessageToCompanyModel> result = new List<MessageToCompanyModel>();
            try
            {
                result = MessageDAL.GetMessagesFromBuildingToCompany(CompId);
            }
            catch (Exception e)
            {

            }
            return result;
        }


     

        [HttpPost]
        [ActionName("AddNewMessageToBuliding")]
        public void AddNewMessageToBuliding(MessageFromCompanyModel messageModel)
        { 
            try
            {
                MessageDAL.AddNewMessage(messageModel);
            }
            catch (Exception e)
            {

            }

        }
    }
}
