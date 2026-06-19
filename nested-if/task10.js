function getCertificate(completedCourse,score)
{
    if(completedCourse=='completed')
    {
        if(score>=60)
        {
            console.log('certificate issued')
        }
        else
        {
            console.log('Score to low')
        }
    }
    else{
        console.log('Course not completed')
    }
}
getCertificate('completed',60)