﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EntryMWeb.Model
{
    public class MessageToCompanyModel
    {
        public int Id { get; set; }

        public string Subject { get; set; }

        public string Text { get; set; }

        public DateTime Date { get; set; }

    }
}
