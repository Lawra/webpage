conda activate tf-gpu

RUN SERVER (inside leadmanager folder)
python manage.py runserver

RUN FRONTEND
npm run dev
