using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace LoginRegistrationForm
{
    public partial class MainForm : Form
    {
        public MainForm()
        {
            InitializeComponent();

            // Associate the event handler with the button's Click event
            btnEmployee.Click += btnEmployee_Click;
        }

        private void btnEmployee_Click(object sender, EventArgs e)
        {
            // Add your desired code here to handle the button click event
            EmployeeForm employeeForm = new EmployeeForm();
            employeeForm.Show();
        }

        private void panel1_Paint(object sender, PaintEventArgs e)
        {
            // Add your panel painting code here
            panel1.BackColor = Color.LightGray; // Example: Set panel background color
        }

        private void panel1_MouseDown(object sender, MouseEventArgs e)
        {
            if (e.Button == MouseButtons.Left)
            {
                Control control = panel1.GetChildAtPoint(e.Location);
                if (control is Button)
                {
                    panel1.Enabled = true;
                }
            }
        }

        private void panel1_MouseUp(object sender, MouseEventArgs e)
        {
            panel1.Enabled = false;
        }

        private void MainForm_Load(object sender, EventArgs e)
        {
            // Add your form load code here
            // For example, you might want to initialize some controls or perform other tasks
        }
    }
}