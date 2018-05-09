using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DataBase;
using EntryMWeb.Model;
using EntryMWeb.Repositry;

namespace EntryMWeb.DAL
{
    public class MemberDAL : IMemberRepository
    {


        public MemberModel GetMemberById(int Id)
        {

            AccessControlSystemEntities context = new AccessControlSystemEntities();
            try
            {
                Member member = context.Members.Where(x => x.Id == Id).FirstOrDefault();
                if (member != null)
                    return MapToMemberModel(member, context);
            }
            catch (Exception e)
            {

            }
            return null;
        }



        public List<MemberModel> GetMembersByCompanyId(int CompanyId)
        {

            AccessControlSystemEntities context = new AccessControlSystemEntities();
            try
            {
                List<Member> members = context.Members.Where(x=>x.CompanyId==CompanyId).ToList();
                List<MemberModel> memberModels = new List<MemberModel>();
                foreach (Member item in members)
                {
                    memberModels.Add(MapToMemberModel(item, context));
                }
                return memberModels;
            }
            catch (Exception e)
            {

            }
            return null;
        }

        public void AddNewMember(MemberModel model)
        {

            AccessControlSystemEntities context = new AccessControlSystemEntities();
            try
            {
                Member memberDB = new Member();
                memberDB.CardNumber = model.CardNumber;
                memberDB.FirstName = model.FirstName;
                memberDB.LastName = model.LastName;
                memberDB.Title = model.Title;
                memberDB.CompanyId = model.CompanyId;
                context.Members.Add(memberDB);
                context.SaveChanges();
            }
            catch (Exception e)
            {

            }
           
        }

        public void EditMember(MemberModel model)
        {

            AccessControlSystemEntities context = new AccessControlSystemEntities();
            try
            {
                Member memberDB = context.Members.Where(x => x.Id == model.Id).FirstOrDefault();
                if (memberDB != null)
                {
                    memberDB.CardNumber = model.CardNumber;
                    memberDB.FirstName = model.FirstName;
                    memberDB.LastName = model.LastName;
                    memberDB.Title = model.Title;
                }              
                context.SaveChanges();
            }
            catch (Exception e)
            {

            }

        }


        public List<MemberModel> GetMembersOfCompany(int CompanyId)
        {

            AccessControlSystemEntities context = new AccessControlSystemEntities();
            try
            {
                List<Member> members = context.Members.Where(x=>x.CompanyId==CompanyId).ToList();
                List<MemberModel> memberModels = new List<MemberModel>();
                foreach (Member item in members)
                {
                    memberModels.Add(MapToMemberModel(item, context));
                }
                return memberModels;
            }
            catch (Exception e)
            {

            }
            return null;
        }


        private MemberModel MapToMemberModel(Member memberDataBase, AccessControlSystemEntities context)
        {
            MemberModel memberModel = new MemberModel();
            memberModel.Id = memberDataBase.Id;
            memberModel.CardNumber = memberDataBase.CardNumber;
            memberModel.Title = memberDataBase.Title;
            memberModel.FirstName = memberDataBase.FirstName;
            memberModel.LastName = memberDataBase.LastName;
            memberModel.CompanyName = (from x in context.Members
                                       where x.Id == memberModel.Id
                                       from y in context.Companies
                                       where y.Id == x.CompanyId
                                       select y.Name
                                      ).FirstOrDefault();

            return memberModel;
        }


    }
}
