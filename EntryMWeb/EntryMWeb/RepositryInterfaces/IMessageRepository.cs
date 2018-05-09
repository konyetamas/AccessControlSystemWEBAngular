using DataBase;
using EntryMWeb.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EntryMWeb.Repositry
{
    interface IMessageRepository
    {
        void AddNewMessage(MessageFromCompanyModel messageModel);

        List<MessageToCompanyModel> GetMessagesFromBuildingToCompany(int CompanyId);

        List<MessageFromCompanyModel> GetMessagesByCompany(int CompanyId);

        MessageFromCompanyModel GetMessageFromCompanyById(int messageId, int CompanyId);

        MessageToCompanyModel GetMessageFromBuilding(int messageId);

      
    }
}
