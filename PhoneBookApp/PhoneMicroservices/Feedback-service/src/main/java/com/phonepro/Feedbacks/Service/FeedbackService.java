package com.phonepro.Feedbacks.Service;

import com.phonepro.Feedbacks.Model.Feedbacks;
import com.phonepro.Feedbacks.Repository.FeedbackRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FeedbackService {

    @Autowired
    private FeedbackRepository fRepo;


    public List<Feedbacks> getAllFeedbacks() {

        return fRepo.findAll();
    }

    public Feedbacks postFeedBack(Feedbacks feedback) {

        return fRepo.save(feedback);
    }
}
