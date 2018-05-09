using DataBase;
using EntryMWeb.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EntryMWeb.Repositry
{
    interface IUserRepository
    {
         UserModel GetUserById(int Id);
         List<UserModel> GetUsers();
        UserModel CheckUserAutenthication(string Name, string Password);
    }
}
