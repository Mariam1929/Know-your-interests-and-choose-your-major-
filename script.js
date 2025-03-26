function calculateResult() {
    let grade = parseInt(document.getElementById("grade").value);
    let futureGoal = document.getElementById("futureGoal").value;
    let preferredSubject = document.getElementById("preferredSubject").value;
    let scienceScore = parseInt(document.getElementById("scienceScore").value);
    let artsScore = parseInt(document.getElementById("artsScore").value);
    let scienceDifficulty = document.getElementById("scienceDifficulty").value;
    let artsDifficulty = document.getElementById("artsDifficulty").value;

    let result = "";

    if (grade >= 90) {
        if (preferredSubject === "رياضيات وفيزياء") {
            result = "التخصص المناسب لك: علمي (فيزياء-رياضيات)";
        } else if (preferredSubject === "كيمياء وأحياء") {
            result = "التخصص المناسب لك: علمي (كيمياء-أحياء)";
        } else {
            result = "يمكنك اختيار العلمي أو التجاري أو الأدبي حسب رغبتك.";
        }
    } else if (grade >= 80) {
        if (preferredSubject === "إدارة وأعمال") {
            result = "التخصص المناسب لك: تجاري";
        } else {
            result = "يمكنك اختيار التجاري أو الأدبي حسب رغبتك.";
        }
    } else if (grade >= 60) {
        result = "التخصص المناسب لك: أدبي";
    } else {
        result = "الأدبي هو الخيار الأنسب لك بناءً على معدلك.";
    }

    // إضافة تحليل بناءً على الطموح الجامعي
    if (futureGoal === "طبي" && grade >= 90 && scienceScore >= 85 && scienceDifficulty !== "صعبة") {
        result += "<br> بما أنك تطمح للتخصص الطبي، فإن العلمي (كيمياء-أحياء) هو الأفضل لك.";
    } else if (futureGoal === "هندسي" && grade >= 90 && scienceScore >= 85 && scienceDifficulty !== "صعبة") {
        result += "<br> بما أنك تطمح للهندسة، فإن العلمي (فيزياء-رياضيات) هو الأفضل لك.";
    } else if (futureGoal === "إداري" && grade >= 80) {
        result += "<br> يمكنك دخول التجاري لأنه يتناسب مع طموحك.";
    } else if (futureGoal === "أدبي") {
        result += "<br> الأدبي هو الخيار المثالي لك.";
    }

    document.getElementById("result").innerHTML = result;
}
