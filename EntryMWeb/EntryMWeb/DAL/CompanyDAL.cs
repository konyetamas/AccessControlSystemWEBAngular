using DataBase;
using EntryMWeb.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using EntryMWeb.Model;
using EntryMWeb.Repositry;

namespace EntryMWeb.DAL
{
    public class CompanyDAL : ICompanyRepository
    {
        public List<CompanyModel> GetCompanies()
        {

            AccessControlSystemEntities context = new AccessControlSystemEntities();
            try
            {
                List<Company> companies = context.Companies.ToList();
                List<CompanyModel> memberModels = new List<CompanyModel>();
                foreach (Company item in companies)
                {
                    memberModels.Add(MapToCompanyModel(item, context));
                }
                return memberModels;
            }
            catch (Exception e)
            {
                throw new Exception(e.Message);
            }
            return null;
        }

        public CompanyModel GetCompanyById(int Id)
        {
            AccessControlSystemEntities context = new AccessControlSystemEntities();
            try
            {
                Company companyDB = context.Companies.Where(x => x.Id == Id).FirstOrDefault();
                if(companyDB!=null)
                  return  MapToCompanyModel(companyDB, context);                      
            }
            catch (Exception e)
            {
                throw new Exception(e.Message);
            }
            return null;
        }

        public void EditCompany(CompanyModel model)
        {
            AccessControlSystemEntities context = new AccessControlSystemEntities();
            try
            {
                Company companyDB = context.Companies.Where(x => x.Id == model.Id).FirstOrDefault();
                if(companyDB!=null)
                {
                    companyDB.Id = model.Id;
                    companyDB.Address = model.Address;
                    companyDB.Name = model.Name;
                    companyDB.Phone = model.Phone;
                }
                context.SaveChanges();
            }
            catch (Exception e)
            {
                throw new Exception(e.Message);
            }
        }
        private CompanyModel MapToCompanyModel(Company companyDataBase, AccessControlSystemEntities context)
        {
            CompanyModel companyModel = new CompanyModel();
            companyModel.Id = companyDataBase.Id;
            companyModel.Name = companyDataBase.Name;
            companyModel.Address = companyDataBase.Address;
            companyModel.Phone = companyDataBase.Phone;

            return companyModel;
        }
    }
}
