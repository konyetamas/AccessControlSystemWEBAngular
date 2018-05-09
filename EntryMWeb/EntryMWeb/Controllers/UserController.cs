using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using EntryMWeb.Model;
using EntryMWeb.DAL;

namespace EntryMWeb.Controllers
{
    public class UserController : ApiController
    {

        [HttpGet]
        public UserModel GetUserByID(int MemberId)
        {
            UserModel result = new UserModel();
            try
            {
                UserDAL userd = new UserDAL();
                result = userd.GetUserById(MemberId);
            }
            catch (Exception e)
            {

            }
            return result;
        }


        [HttpGet]
        public int CheckUserAutenthication(string Username, string Password)
        {
            UserModel result = new UserModel();
            try
            {
                UserDAL userd = new UserDAL();
                result = userd.CheckUserAutenthication(Username, Password);
                if (result == null && result.CompanyId==0)
                {
                    throw new Exception();
                }
            }         
            catch (Exception e)
            {

            }
            return result==null ? 0: result.CompanyId;
        }


    }
}
