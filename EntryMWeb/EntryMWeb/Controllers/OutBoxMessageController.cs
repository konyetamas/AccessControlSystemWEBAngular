using EntryMWeb.DAL;
using DataBase;
using EntryMWeb.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace EntryMWeb.Controllers
{
    public class OutBoxMessageController : ApiController
    {
        [HttpGet]
        [ActionName("GetCompanyMessages")]
        public List<MessageFromCompanyModel> GetCompanyMessages(int Id)
        {
            List<MessageFromCompanyModel> result = new List<MessageFromCompanyModel>();
            try
            {
                MessageDAL messaged = new MessageDAL();
                result = messaged.GetMessagesByCompany(Id);
            }
            catch (Exception e)
            {

            }
            return result;
        }

        [HttpGet]
        [ActionName("GetMessage")]
        public MessageFromCompanyModel GetMessage(int MessageId, int CompanyId)
        {
            MessageFromCompanyModel result = new MessageFromCompanyModel();
            try
            {
                MessageDAL messageDAL = new MessageDAL();
                result = messageDAL.GetMessageFromCompanyById(MessageId, CompanyId);
            }
            catch (Exception e)
            {

            }
            return result;
        }






        [HttpPost]
        [ActionName("AddNewMessage")]
        public void AddNewMessage(MessageFromCompanyModel messageModel)
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
    }
}
