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
                result = UserDAL.GetUserById(MemberId);
            }
            catch (Exception e)
            {

            }
            return result;
        }


        [HttpGet]
        public UserModel CheckUserAutenthication(string Username, string Password)
        {
            UserModel result = new UserModel();
            try
            {
                UserModel user = new UserModel();
                result = UserDAL.CheckUserAutenthication(user.Name, user.Password);
                if (result == null)
                {
                    throw new Exception();
                }
            }         
            catch (Exception e)
            {

            }
            return result;
        }


    }
}
