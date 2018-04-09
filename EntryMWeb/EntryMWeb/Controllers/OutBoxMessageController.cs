using EntryMWeb.DAL;
using EntryMWeb.DB;
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
                result = MessageDAL.GetMessagesByCompany(Id);
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
                MessageDAL.AddNewMessage(messageModel);
            }
            catch (Exception e)
            {

            }
        }
    }
}
