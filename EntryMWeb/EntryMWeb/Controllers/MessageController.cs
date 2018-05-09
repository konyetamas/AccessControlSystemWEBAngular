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
                MessageDAL messageDAL = new MessageDAL();
                result = messageDAL.GetMessagesFromBuildingToCompany(CompId);
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
                MessageDAL messageDAL = new MessageDAL();
                messageDAL.AddNewMessage(messageModel);
            }
            catch (Exception e)
            {

            }

        }


        [HttpGet]
        [ActionName("GetMessageFromBuliding")]
        public MessageToCompanyModel GetMessageFromBuliding(int MessageId)
        {
            MessageToCompanyModel result = new MessageToCompanyModel();
            try
            {
                MessageDAL messageDAL = new MessageDAL();
                result = messageDAL.GetMessageFromBuilding(MessageId);
            }
            catch (Exception e)
            {

            }
            return result;
        }
    }
}
