using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using EntryMWeb.Model;
using DataBase;
using EntryMWeb.Repositry;

namespace EntryMWeb.DAL
{
    public class UserDAL : IUserRepository
    {
        public UserModel GetUserById(int Id)
        {
            try
            {
                AccessControlSystemEntities context = new AccessControlSystemEntities();
                User userDb = context.Users.Where(x => x.Id == Id).FirstOrDefault();
                if (userDb != null)
                    return MapToUserModel(userDb, context);
            }
            catch(Exception e)
            {

            }
            return null;
        }

        public List<UserModel> GetUsers()
        {
            List<UserModel> users = new List<UserModel>();
            try
            {
                AccessControlSystemEntities context = new AccessControlSystemEntities();
                List<User> usersDb = context.Users.ToList();
               
                foreach (var item in usersDb)
                {
                    users.Add(MapToUserModel(item, context));
                }              
            }
            catch (Exception e)
            {

            }
            return users;
        }


        public UserModel CheckUserAutenthication(string Name, string Password)
        {
            try
            {
                AccessControlSystemEntities context = new AccessControlSystemEntities();
                User userDb = context.Users.Where(x => x.Name == Name && x.Password==Password).FirstOrDefault();
                if (userDb != null)
                    return MapToUserModel(userDb, context);
            }
            catch (Exception e)
            {
                throw new Exception(e.Message);
            }
            return null;
        }

        private UserModel MapToUserModel(User userDB, AccessControlSystemEntities context)
        {
            UserModel userModel = new UserModel();
            userModel.Id = userDB.Id;
            userModel.Name = userDB.Name;
            userModel.Role = userDB.Role;
            userModel.Password = userDB.Password;
            userModel.CompanyId = userDB.CompanyId==null ? 0: (int)userDB.CompanyId;
            return userModel;
        }

    
    }
}
