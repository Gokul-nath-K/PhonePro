package com.phonepro.Feedbacks.Controller;

import com.phonepro.Feedbacks.Model.Feedbacks;
import com.phonepro.Feedbacks.Service.FeedbackService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/feedback")
public class FeedbackController {

    @Autowired
    private FeedbackService fService;

    @GetMapping("/get_all")
    public ResponseEntity<List<Feedbacks>> getAllFeedbacks() {

        return ResponseEntity.ok(fService.getAllFeedbacks());
    }

    @PostMapping("/post")
    public ResponseEntity<Feedbacks> postFeedbacks(@RequestBody Feedbacks feedback) {

        return ResponseEntity.ok(   fService.postFeedBack(feedback));
    }
}
