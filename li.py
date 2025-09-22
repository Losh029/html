import matplotlib.pyplot as plt
import matplotlib.patches as patches

# Define detailed flowchart steps with sub-points
steps = [
    ("Start Project", []),

    ("Problem Identification", [
        "Manual breed classification is slow & inaccurate",
        "Need for automated, easy-to-use system"
    ]),

    ("Requirement Analysis", [
        "Must work with images only",
        "Support mobile/web use",
        "Focus on Indian cattle & buffalo breeds"
    ]),

    ("Image Data Collection", [
        "Field photography of animals",
        "Download from NBAGR, ICAR datasets",
        "Ensure breed diversity (Gir, Murrah, Sahiwal, etc.)"
    ]),

    ("Image Labeling & Organization", [
        "Assign breed names to images",
        "Organize in breed-specific folders",
        "Maintain dataset balance"
    ]),

    ("Image Preprocessing", [
        "Resize (e.g., 224x224)",
        "Normalize pixel values (0-1)",
        "Apply data augmentation: rotation, flip, brightness"
    ]),

    ("Model Selection", [
        "Choose CNN model (MobileNet, ResNet)",
        "Use transfer learning"
    ]),

    ("Model Training", [
        "Train on 80% of the dataset",
        "Use GPU (Colab/local)",
        "Optimize with loss function and backpropagation"
    ]),

    ("Model Validation & Testing", [
        "Validate with 10-15% data",
        "Test on unseen images",
        "Evaluate: accuracy, precision, recall, confusion matrix"
    ]),

    ("Model Optimization", [
        "Fine-tune hyperparameters",
        "Reduce overfitting",
        "Add more training data if needed"
    ]),

    ("App Development & Integration", [
        "Build Android/Web interface",
        "Integrate model via API or TensorFlow.js",
        "Allow image upload → Show predicted breed + confidence"
    ]),

    ("Deployment", [
        "Deploy to cloud (Firebase, Heroku)",
        "Add offline compatibility"
    ]),

    ("User Testing", [
        "Test with farmers and vets",
        "Collect user feedback"
    ]),

    ("Final Release", [
        "Share app/tool with users",
        "Train users if needed"
    ]),

    ("End Project", [])
]

# Create figure
fig, ax = plt.subplots(figsize=(14, 22))
ax.set_xlim(0, 10)
ax.set_ylim(0, len(steps) * 2)
ax.axis('off')

# Colors
box_color = '#E8F6F3'
text_color = 'black'
arrow_color = 'gray'

# Draw each step as a box
for i, (title, subpoints) in enumerate(steps):
    y = len(steps) * 2 - (i * 2) - 1
    height = 1.2 if subpoints else 0.8
    box = patches.FancyBboxPatch(
        (1.5, y - height/2), 7, height,
        boxstyle="round,pad=0.02", edgecolor='black', facecolor=box_color
    )
    ax.add_patch(box)

    # Add title
    ax.text(5, y + 0.3 if subpoints else y, title, ha='center', va='center', fontsize=11, weight='bold', color=text_color)

    # Add subpoints
    for j, point in enumerate(subpoints):
        ax.text(5, y - 0.1 - 0.3 * j, f"- {point}", ha='center', va='top', fontsize=9, color=text_color)

    # Draw arrow
    if i < len(steps) - 1:
        ax.annotate('', xy=(5, y - height/2 - 0.2), xytext=(5, y - height/2),
                    arrowprops=dict(arrowstyle='->', lw=1.5, color=arrow_color))

plt.title("Detailed Flowchart – Image-Based Breed Recognition System", fontsize=14, weight='bold')
plt.tight_layout()
plt.show()
